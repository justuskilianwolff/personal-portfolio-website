import type { TimelineEvent } from '../types';
import {
	CPLEX,
	GraphTheory,
	LaTeX,
	MixedIntegerProgramming,
	Python,
	Svelte,
	Tailwind,
	TypeScript
} from './logos';

export const projects: TimelineEvent[] = [
	{
		title: 'Personal Portfolio Website',
		subtitle: "Who wouldn't be interested in what I do!?",
		time: '2025',
		description: `I always wanted to build my own portfolio website, mainly to have a public domain for making my HomeAssistant instance available online.
Turns out I couldn't use a subdomain and had to buy a second website. Nevertheless, I enjoyed this project — built with Svelte, AI, and passion.`,
		skills: [Svelte, TypeScript, Tailwind],
		links: [
			{
				url: 'https://github.com/justuskilianwolff/personal-portfolio-website',
				text: 'Source Code @ GitHub'
			}
		]
	},
	{
		title: 'Dotfiles & Shell Configuration',
		subtitle: 'Syncing shell and system configs across machines',
		time: '2024 – Present',
		description: `Simple repo to sync my shell and system configs (zsh, Homebrew, iTerm2, Karabiner, Hammerspoon) between devices. No stow/chezmoi yet, just scripts and docs for setup and shortcuts.`,

		links: [
			{
				url: 'https://github.com/justuskilianwolff/dotfiles',
				text: 'Source Code @ GitHub'
			}
		]
	},
	{
		title: 'EV Charger Placement Optimization',
		subtitle: 'AIMMS-MOPTA Competition & Research',
		time: 'Feb 2023 - Aug 2023',
		description: `Stochastic optimization for determining electric vehicle charger locations. Developed and implemented a model for the 15th AIMMS-MOPTA Optimization Modeling Competition. Paper uploaded to repo and submitted to journal.`,
		skills: [Python, CPLEX, LaTeX],
		links: [
			{
				url: 'https://github.com/justuskilianwolff/ev-station-solver',
				text: 'Source Code @ GitHub'
			}
		]
	},
	{
		title: 'Master’s Thesis: Tail Assignment Problem',
		subtitle: 'Lufthansa Systems, Raunheim, Germany',
		time: 'Jun 2023 – Aug 2023',
		description: `<ul>
	<li>Theory: Mixed-integer programming, graph theory, and column generation.</li>
	<li>Practice: Implementation in Python with CPLEX.</li>
</ul>`,
		skills: [Python, CPLEX, MixedIntegerProgramming, GraphTheory]
	},
	{
		title: 'Ultra-High-Speed Transportation & Hyperloop Optimization',
		subtitle: "mu-zero HYPERLOOP, Research Publication & Bachelor's Thesis",
		time: 'Sep 2021 - 2022',
		description: `<ul>
	<li>Infrastructure research on the feasibility of existing railway lines for ultra-high-speed transportation.</li>
	<li>Winner of the socio-economic award at EHW 2022.</li>
	<li>Published research paper on European transportation routes.</li>
	<li>Bachelor’s thesis: Multi-objective optimization of travel time, comfort, and energy consumption for Hyperloop systems at KIT’s Institute for Operations Research. Completed with perfect grade (1.0).</li>
</ul>`,
		skills: [Python, LaTeX],
		links: [
			{
				url: `https://www.researchgate.net/publication/367807003_Using_Europe's_Railway_Corridors_for_Ultra-High-Speed_Transportation_Trajectory_Modeling_and_Assessment`,
				text: 'Pre Print @ ResearchGate'
			},
			{
				url: 'https://github.com/mu-zero-HYPERLOOP/c3_infrastructure_optimization',
				text: 'Source Code @ GitHub'
			}
		]
	}
];
