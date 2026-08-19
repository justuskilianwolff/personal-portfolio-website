import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { rename, rm } from 'node:fs/promises';
import net from 'node:net';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const host = '127.0.0.1';
const output = fileURLToPath(new URL('../static/og-image.png', import.meta.url));

async function findAvailablePort() {
	const server = net.createServer();
	await new Promise((resolve) => server.listen(0, host, resolve));
	const address = server.address();
	if (!address || typeof address === 'string') {
		throw new Error('Could not reserve a local port for Open Graph image generation.');
	}
	await new Promise((resolve, reject) =>
		server.close((error) => (error ? reject(error) : resolve()))
	);
	return address.port;
}

async function waitForServer(url) {
	for (let attempt = 0; attempt < 300; attempt++) {
		try {
			const response = await fetch(url);
			if (response.ok) return;
		} catch {
			// Vite has not started yet.
		}
		await new Promise((resolve) => setTimeout(resolve, 100));
	}
	throw new Error(`Timed out waiting for ${url}`);
}

async function main(outputPath) {
	const port = await findAvailablePort();
	const url = `http://${host}:${port}/og`;
	const vite = spawn(
		'pnpm',
		['exec', 'vite', 'dev', '--host', host, '--port', String(port), '--strictPort'],
		{ stdio: 'inherit' }
	);

	try {
		await waitForServer(url);
		const browser = await chromium.launch();
		try {
			const page = await browser.newPage({
				viewport: { width: 1200, height: 630 },
				deviceScaleFactor: 1
			});
			await page.goto(url, { waitUntil: 'networkidle' });
			await page.evaluate(async () => document.fonts.ready);
			const card = page.locator('[data-og-card]');
			await card.waitFor();
			await page.waitForFunction(() => {
				const card = document.querySelector('[data-og-card]');
				const canvas = card?.querySelector('canvas');
				const portrait = card?.querySelector('img');
				return canvas?.width && portrait?.complete && portrait.naturalWidth > 0;
			});
			await card.screenshot({ path: outputPath, type: 'png' });
		} finally {
			await browser.close();
		}
	} finally {
		vite.kill('SIGTERM');
		await once(vite, 'exit');
	}
}

const temporaryOutput = fileURLToPath(new URL('../static/og-image.tmp.png', import.meta.url));

try {
	await rm(temporaryOutput, { force: true });
	await main(temporaryOutput);
	await rename(temporaryOutput, output);
} catch (error) {
	await rm(temporaryOutput, { force: true });
	throw new Error('Could not generate the Open Graph image; the existing image was preserved.', {
		cause: error
	});
}
