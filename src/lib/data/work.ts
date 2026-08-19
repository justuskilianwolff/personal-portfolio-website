import type { TimelineEvent } from '../types';
import {
	CPLEX,
	Docker,
	Git,
	GitHub,
	GraphTheory,
	LaTeX,
	MixedIntegerProgramming,
	MLflow,
	Python,
	REST,
	Svelte,
	TensorFlow,
	VSCode
} from './logos';

export const work: TimelineEvent[] = [
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
		title: "Master's Thesis",
		subtitle: 'Lufthansa Systems, Raunheim, Germany',
		time: 'Jun 2023 - Aug 2023',
		description: {
			text: 'Developed a solution approach for the tail-assignment problem, which matches aircraft to flights, using problem-specific graph algorithms and column generation.'
		},
		skills: [Python, CPLEX, MixedIntegerProgramming, GraphTheory]
	},
	{
		title: 'Research Team Member',
		subtitle: 'mu-zero HYPERLOOP, Karlsruhe, Germany',
		time: 'Oct 2021 - Sep 2022',
		description: {
			text: 'Researched the feasibility of adapting existing railway infrastructure for ultra-high-speed transportation'
		},
		skills: [Python, LaTeX],
		links: [
			{
				url: `https://www.researchgate.net/publication/367807003_Using_Europe's_Railway_Corridors_for_Ultra-High-Speed_Transportation_Trajectory_Modeling_and_Assessment`,
				text: 'Preprint @ ResearchGate'
			},
			{
				url: 'https://github.com/mu-zero-HYPERLOOP/c3_infrastructure_optimization',
				text: 'Source Code @ GitHub'
			}
		]
	},
	{
		title: 'Research Assistant',
		subtitle: 'Institute of Product Engineering at KIT, Karlsruhe, Germany',
		time: 'Jul 2021 - Dec 2021',
		description: {
			text: 'Literature research and comparative analysis of product development approaches'
		},
		skills: []
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
		title: 'Teaching Assistant',
		subtitle: 'Karlsruhe Institute of Technology (KIT)',
		time: 'Apr 2020 - Aug 2020',
		description: {
			text: 'Prepared and led tutorial sessions for "Introduction to Operations Research I"'
		},
		skills: [MixedIntegerProgramming, GraphTheory]
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
