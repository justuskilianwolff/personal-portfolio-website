<script lang="ts">
	let {
		dotPosition = $bindable({ x: 0.86, y: 0.22 }),
		optimumPosition = { x: 0.86, y: 0.22 },
		hideDot = false,
		fadeFromOptimum = false,
		peakOpacity = 0.4,
		edgeOpacity = 0.04,
		falloffRate = 2.5,
		class: className = ''
	}: {
		dotPosition?: { x: number; y: number };
		optimumPosition?: { x: number; y: number };
		hideDot?: boolean;
		fadeFromOptimum?: boolean;
		peakOpacity?: number;
		edgeOpacity?: number;
		falloffRate?: number;
		class?: string;
	} = $props();

	type Point = { x: number; y: number };
	type Basin = Point & { rx: number; ry: number; depth: number };
	let canvas: HTMLCanvasElement;

	const OPTIMUM = $derived(optimumPosition);

	// ── Random basin generator ───────────────────────────────────────────
	function generateBasins(optimum: Point): Basin[] {
		const basins: Basin[] = [];
		let seed = 0x6d2b79f5;
		const random = () => {
			seed = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			seed += Math.imul(seed ^ (seed >>> 7), 61 | seed) ^ seed;
			return ((seed ^ (seed >>> 14)) >>> 0) / 4294967296;
		};

		// Seeded secondary basins keep the contour stable across redraws.
		const count = 8 + Math.floor(random() * 6);
		for (let i = 0; i < count; i++) {
			basins.push({
				x: random() * 1.2 - 0.05,
				y: random() * 0.55,
				rx: 0.1 + random() * 0.08,
				ry: 0.09 + random() * 0.08,
				depth: 0.2 + random() * 0.25
			});
		}

		// Measure the deepest point the secondary basins create
		let worstSecondary = 0;
		for (let ny = 0; ny <= 50; ny++) {
			for (let nx = 0; nx <= 80; nx++) {
				const x = nx / 80;
				const y = ny / 50;
				let h = 0;
				for (const b of basins) {
					const dx = (x - b.x) / b.rx;
					const dy = (y - b.y) / b.ry;
					h += b.depth * Math.exp(-(dx * dx + dy * dy));
				}
				if (h > worstSecondary) worstSecondary = h;
			}
		}

		// Anchor basin: deeper than anything the secondaries can produce
		basins.push({
			x: optimum.x,
			y: optimum.y,
			rx: 0.18 + random() * 0.04,
			ry: 0.14 + random() * 0.04,
			depth: worstSecondary + 0.3 + random() * 0.1
		});

		return basins;
	}

	const basins = $derived(generateBasins(OPTIMUM));

	function terrainHeight(x: number, y: number) {
		let h = -0.16 * x + 0.04 * y;
		for (const basin of basins) {
			const dx = (x - basin.x) / basin.rx;
			const dy = (y - basin.y) / basin.ry;
			h -= basin.depth * Math.exp(-(dx * dx + dy * dy));
		}
		h += 0.025 * Math.sin(18 * x + 9 * y) + 0.014 * Math.sin(31 * x - 15 * y);
		return h;
	}

	function draw(cvs: HTMLCanvasElement) {
		const ctx = cvs.getContext('2d');
		if (!ctx) return;

		const rect = cvs.getBoundingClientRect();
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const width = rect.width;
		const height = rect.height;
		if (width === 0 || height === 0) return;

		cvs.width = Math.round(width * dpr);
		cvs.height = Math.round(height * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, width, height);

		const foreground =
			getComputedStyle(cvs).getPropertyValue('--text').trim() || 'hsl(210 10% 92%)';

		function px(p: Point) {
			return { x: p.x * width, y: p.y * height };
		}

		// ── Contour lines (marching squares) ─────────────────────────────
		const cols = 84;
		const rows = 50;
		// Dynamically compute levels from actual data range
		let dataMin = Infinity;
		let dataMax = -Infinity;
		// Pre-scan for range (values array filled below)
		for (let j = 0; j <= rows; j++) {
			for (let i = 0; i <= cols; i++) {
				const v = terrainHeight(i / cols, j / rows);
				if (v < dataMin) dataMin = v;
				if (v > dataMax) dataMax = v;
			}
		}
		const levelCount = 22;
		const levels: number[] = [];
		for (let k = 0; k < levelCount; k++) {
			levels.push(dataMin + (k / (levelCount - 1)) * (dataMax - dataMin));
		}

		const values: number[][] = [];

		for (let j = 0; j <= rows; j++) {
			const row: number[] = [];
			for (let i = 0; i <= cols; i++) {
				const nx = i / cols;
				const ny = j / rows;
				row.push(terrainHeight(nx, ny));
			}
			values.push(row);
		}

		ctx.strokeStyle = foreground;
		ctx.lineWidth = 1.35;

		if (fadeFromOptimum) {
			// Opacity fades from peak (0.4) to edges (~0.06) based on distance
			for (const level of levels) {
				for (let j = 0; j < rows; j++) {
					for (let i = 0; i < cols; i++) {
						const corners = [
							{ x: i / cols, y: j / rows, v: values[j][i] },
							{ x: (i + 1) / cols, y: j / rows, v: values[j][i + 1] },
							{ x: (i + 1) / cols, y: (j + 1) / rows, v: values[j + 1][i + 1] },
							{ x: i / cols, y: (j + 1) / rows, v: values[j + 1][i] }
						];
						const intersections: Point[] = [];
						for (let k = 0; k < 4; k++) {
							const a = corners[k];
							const b = corners[(k + 1) % 4];
							if ((a.v < level && b.v >= level) || (a.v >= level && b.v < level)) {
								const t = (level - a.v) / (b.v - a.v);
								intersections.push({
									x: a.x + (b.x - a.x) * t,
									y: a.y + (b.y - a.y) * t
								});
							}
						}
						if (intersections.length >= 2) {
							const midX = (intersections[0].x + intersections[1].x) / 2;
							const midY = (intersections[0].y + intersections[1].y) / 2;
							const dist = Math.sqrt((midX - OPTIMUM.x) ** 2 + (midY - OPTIMUM.y) ** 2);
							ctx.globalAlpha =
								edgeOpacity + (peakOpacity - edgeOpacity) * Math.exp(-dist * falloffRate);
							const a = px(intersections[0]);
							const b = px(intersections[1]);
							ctx.beginPath();
							ctx.moveTo(a.x, a.y);
							ctx.lineTo(b.x, b.y);
							ctx.stroke();
						}
					}
				}
			}
		} else {
			ctx.globalAlpha = 0.24;
			for (const level of levels) {
				ctx.beginPath();
				for (let j = 0; j < rows; j++) {
					for (let i = 0; i < cols; i++) {
						const corners = [
							{ x: i / cols, y: j / rows, v: values[j][i] },
							{ x: (i + 1) / cols, y: j / rows, v: values[j][i + 1] },
							{ x: (i + 1) / cols, y: (j + 1) / rows, v: values[j + 1][i + 1] },
							{ x: i / cols, y: (j + 1) / rows, v: values[j + 1][i] }
						];
						const intersections: Point[] = [];
						for (let k = 0; k < 4; k++) {
							const a = corners[k];
							const b = corners[(k + 1) % 4];
							if ((a.v < level && b.v >= level) || (a.v >= level && b.v < level)) {
								const t = (level - a.v) / (b.v - a.v);
								intersections.push({
									x: a.x + (b.x - a.x) * t,
									y: a.y + (b.y - a.y) * t
								});
							}
						}
						if (intersections.length >= 2) {
							const a = px(intersections[0]);
							const b = px(intersections[1]);
							ctx.moveTo(a.x, a.y);
							ctx.lineTo(b.x, b.y);
						}
					}
				}
				ctx.stroke();
			}
		}

		// ── Find true minimum near OPTIMUM via local refinement ─────────
		let bestX = OPTIMUM.x;
		let bestY = OPTIMUM.y;
		let bestVal = terrainHeight(bestX, bestY);
		const searchR = 0.06;
		const steps = 60;
		for (let j = 0; j <= steps; j++) {
			for (let i = 0; i <= steps; i++) {
				const sx = OPTIMUM.x - searchR + (2 * searchR * i) / steps;
				const sy = OPTIMUM.y - searchR + (2 * searchR * j) / steps;
				const v = terrainHeight(sx, sy);
				if (v < bestVal) {
					bestVal = v;
					bestX = sx;
					bestY = sy;
				}
			}
		}
		const opt = px({ x: bestX, y: bestY });

		// Dot
		if (!hideDot) {
			ctx.beginPath();
			ctx.arc(opt.x, opt.y, 9, 0, Math.PI * 2);
			ctx.fillStyle = foreground;
			ctx.globalAlpha = 0.9;
			ctx.fill();
		}

		// Export normalized dot position (guard to avoid unnecessary re-renders)
		if (bestX !== dotPosition.x || bestY !== dotPosition.y) {
			dotPosition = { x: bestX, y: bestY };
		}

		ctx.globalAlpha = 1;
	}

	$effect(() => {
		if (!canvas || typeof window === 'undefined') return;

		draw(canvas);

		const ro =
			typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(() => draw(canvas));
		ro?.observe(canvas);

		// Redraw when the CSS token changes (for example, after a theme switch).
		const themeObserver =
			typeof MutationObserver === 'undefined' ? null : new MutationObserver(() => draw(canvas));
		themeObserver?.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class', 'style', 'data-theme']
		});

		return () => {
			ro?.disconnect();
			themeObserver?.disconnect();
		};
	});
</script>

<div class="relative h-full w-full overflow-hidden {className}">
	<canvas bind:this={canvas} class="h-full w-full" aria-hidden="true"></canvas>
</div>
