import type { TimelineEvent } from '../types';
import { CPLEX, LaTeX, Python, Svelte, Tailwind, TypeScript } from './logos';

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
		title: 'EV Charger Placement Optimization',
		subtitle: 'Published Research & AIMMS-MOPTA Competition',
		time: 'Feb 2023 - Jan 2026',
		description:
			'Stochastic optimization for determining electric vehicle charger locations. Developed and implemented a model for the 15th AIMMS-MOPTA Optimization Modeling Competition.',
		skills: [Python, CPLEX, LaTeX],
		links: [
			{
				url: 'https://www.sciencedirect.com/science/article/pii/S0305054825003181',
				text: 'Publication @ Computers & Operations Research'
			},
			{
				url: 'https://github.com/justuskilianwolff/ev-station-solver',
				text: 'Source Code @ GitHub'
			}
		]
	},
	{
		title: 'Steck-Fix',
		subtitle: 'Own Start-up: Technical Aid for Visually Impaired People',
		time: 'Apr 2016 - Apr 2024',
		description: `<ul>
	<li>Development of a technical aid for visually impaired people</li>
	<li>Sales on my website and at wholesalers</li>
	<li>Business registration with 17 years of age</li>
	<li>TV appearance at "Simply ingenious!" ("Einfach genial!")</li>
	<li>Utility model registrations</li>
	<li>Inspiration for the development by my grandmother in 2014</li>
</ul>`,
		skills: [],
		links: [
			{
				url: 'https://intranet.tuhh.de/presse/pressemitteilung_einzeln.php?id=10327&Lang=de',
				text: 'Press Release @ TUHH'
			},
			{
				url: 'https://www.abendblatt.de/hamburg/harburg/article207166079/Schueler-Justus-Wolff-ist-ein-Erfinder.html',
				text: 'Article @ Abendblatt'
			}
		]
	},
	{
		title: 'Dotfiles & Shell Configuration',
		subtitle: 'Syncing shell and system configs across machines',
		time: '2024 - Present',
		description:
			'Simple repo to sync my shell and system configs (zsh, Homebrew, iTerm2, Karabiner, Hammerspoon) between devices. No stow/chezmoi yet, just scripts and docs for setup and shortcuts.',
		links: [
			{
				url: 'https://github.com/justuskilianwolff/dotfiles',
				text: 'Source Code @ GitHub'
			}
		]
	}
];
