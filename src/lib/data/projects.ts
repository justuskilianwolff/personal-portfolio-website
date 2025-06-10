import type { TimelineEvent } from '../types';
import {
	CPLEX,
	GraphTheory,
	MixedIntegerProgramming,
	Python,
	Svelte,
	Tailwind,
	TypeScript
} from './logos';

export const projects: TimelineEvent[] = [
	{
		title: 'Personal Portfolio Website',
		subtitle: 'Personal Project',
		time: '2026',
		description: `I always wanted to build my own portfolio website, mainly to have a public domain for making my HomeAssistant instance available online.
Turns out I couldn't use a subdomain and had to buy a second website. Nevertheless, I enjoyed this project—built with Svelte, AI, and passion.`,
		skills: [Svelte, TypeScript, Tailwind], // Replace with relevant skills/logos if available
		links: [
			{ url: 'https://github.com/justuswolff/personal-website', text: 'Source Code @ GitHub' }
		] //TODO: make repo public
	},
	{
		title: 'EV Charger Placement Optimization',
		subtitle: 'AIMMS-MOPTA Competition & Research',
		time: 'Feb 2023 - Aug 2023',
		description: `Stochastic optimization for determining electric vehicle charger locations. Developed and implemented a model for the 15th AIMMS-MOPTA Optimization Modeling Competition. Paper in preparation.`,
		skills: [Python, CPLEX],
		links: [] //TODO: add links to repo
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
		skills: [Python],
		links: [{ url: 'https://doi.org/10.13140/RG.2.2.23609.24163', text: 'Publication' }] //TODO add link to code etc
	},
	{
		title: 'Steck-Fix: Technical Aid for the Visually Impaired',
		subtitle: 'Founder',
		time: 'Apr 2016 - Present',
		description: `Development and commercialization of a technical aid for visually impaired people. Registered the business at age 17, appeared on TV ("Simply Ingenious!"), and obtained utility model registrations.`,
		links: [] // TODO: add links
	}
];
