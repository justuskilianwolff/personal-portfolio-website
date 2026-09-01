import type { TimelineEvent } from '../types';
import {
	Docker,
	Git,
	GitHub,
	MixedIntegerProgramming,
	MLflow,
	Python,
	REST,
	Svelte,
	Tailwind,
	TensorFlow,
	TypeScript,
	VSCode
} from './logos';

export const experience: TimelineEvent[] = [
	{
		title: 'Founder',
		subtitle: 'bools.io, Hamburg, Germany',
		time: 'Nov 2025 - Present',
		description: {
			text: 'Building bools.io, a mathematical optimisation platform for everyone.',
			bullets: [
				'Problems are expressed in a human-readable modelling language, so users can see what is being optimised, which constraints apply, and why a decision was made.',
				'Solver access is available through an API and interface, without specialist hiring, custom development, or solver setup.',
				'An AI assistant translates plain-language requirements into a structured model.'
			]
		},
		skills: [Python, MixedIntegerProgramming, REST, Svelte, Docker],
		links: [
			{ url: 'https://bools.io', text: 'bools.io' },
			{ url: 'https://www.linkedin.com/company/bools-io/', text: 'LinkedIn' }
		]
	},
	{
		title: 'AI Engineer',
		subtitle: 'audit.neo, Hamburg, Germany',
		time: 'Jan 2024 - Aug 2025',
		description: {
			text: 'Designed, developed, and deployed from concept to production:',
			bullets: [
				'Fraud detection systems using deep learning',
				'A chatbot system tailored to auditors',
				'Machine-learning and optimisation tools for internal use'
			]
		},
		skills: [Git, GitHub, Python, TensorFlow, MLflow, Docker, VSCode]
	},
	{
		title: 'Intern IT Management in Logistics and Production',
		subtitle: 'Porsche AG, Zuffenhausen, Germany',
		time: 'Sep 2020 - Dec 2020',
		description: {
			text: 'IT management support across production and logistics:',
			bullets: [
				'Supported introduction of capability management, identifying business skills and information objects',
				'Tested and evaluated EAM tools for capability management use',
				'Built an internal tool for automated business case calculations'
			]
		},
		skills: []
	},
	{
		title: 'Intern Market Research and Product Evaluation',
		subtitle: 'HorseAnalytics, Hamburg, Germany',
		time: 'Jun 2018 - Aug 2018',
		skills: []
	},
	{
		title: 'Intern Data Collection and Analysis',
		subtitle: 'NÜWIEL, Hamburg, Germany',
		time: 'May 2018 - Jun 2018',
		skills: []
	}
];

export const projects: TimelineEvent[] = [
	{
		title: 'Personal Portfolio Website',
		subtitle: "Who wouldn't be interested in what I do!?",
		time: '2025',
		description: {
			text: "I always wanted to build my own portfolio website, mainly to have a public domain for making my Home Assistant instance available online. Turns out I couldn't use a subdomain and had to buy a second website. Nevertheless, I enjoyed building it with Svelte, AI, and passion."
		},
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
		time: '2024 - Present',
		description: {
			text: 'Simple repo to sync my shell and system configs (zsh, Homebrew, iTerm2, Karabiner, Hammerspoon) between devices. No stow/chezmoi yet, just scripts and docs for setup and shortcuts.'
		},
		links: [
			{
				url: 'https://github.com/justuskilianwolff/dotfiles',
				text: 'Source Code @ GitHub'
			}
		]
	},
	{
		title: 'Steck-Fix',
		subtitle: 'Own Start-up: Technical Aid for Visually Impaired People',
		time: 'Apr 2016 - Apr 2024',
		description: {
			bullets: [
				'Development of a technical aid for visually impaired people',
				'Sales on my website and at wholesalers',
				'Registered the business at age 17',
				'TV appearance at "Simply ingenious!" ("Einfach genial!")',
				'Utility model registrations',
				'Inspired by my grandmother in 2014'
			]
		},
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
	}
];
