import type { TimelineEvent } from '../types';

export const projects: TimelineEvent[] = [
	{
		title: 'Steck-Fix - Technical Aid for Visually Impaired',
		subtitle: 'Own Start-up',
		time: 'Apr 2016 - Present',
		description:
			"Development and commercialization of a technical aid for visually impaired people. Business registration at age 17, TV appearance on 'Simply ingenious!', utility model registrations.",
		links: [
			{ url: 'https://www.steck-fix.de', text: 'Website' },
			{ url: 'https://www.linkedin.com/company/steck-fix', text: 'LinkedIn' }
		]
	},
	{
		title: 'EV Charger Placement Optimization',
		subtitle: 'AIMMS-MOPTA Competition & Research',
		time: 'Feb 2023 - Aug 2023',
		description:
			'Stochastic optimization for determining electric vehicle charger locations. Model development and implementation for the 15th AIMMS-MOPTA Optimization Modeling Competition. Paper in preparation.',
		technologies: [
			{ identifier: 'python', url: '', text: 'Python' },
			{ identifier: 'cplex', url: '', text: 'CPLEX' }
		]
	},
	{
		title: 'Ultra-High-Speed Transportation Research',
		subtitle: 'mu-zero HYPERLOOP & Research Publication',
		time: 'Sep 2021 - Feb 2023',
		description:
			'Infrastructure research on feasibility of existing railway lines for ultra-high-speed transportation. Winner of socio-economic award at EHW 2022. Published research paper on European transportation routes.',
		technologies: [{ identifier: 'python', url: '', text: 'Python' }],
		links: [{ url: 'https://doi.org/10.13140/RG.2.2.23609.24163', text: 'Publication' }]
	},
	{
		title: 'The Tail Assignment Problem',
		subtitle: "Master's Thesis - Lufthansa Systems",
		time: 'Jun 2023 - Aug 2023',
		description:
			'Mixed-Integer Programming approach to aircraft tail assignment optimization. Implementation using graph theory and column generation techniques. Completed with 83% grade.',
		technologies: [
			{ identifier: 'python', url: '', text: 'Python' },
			{ identifier: 'cplex', url: '', text: 'CPLEX' }
		]
	},
	{
		title: 'Multi-Objective Hyperloop Optimization',
		subtitle: "Bachelor's Thesis",
		time: '2022',
		description:
			"Travel Time, Comfort and Energy Consumption optimization for Hyperloop systems at KIT's Institute for Operations Research. Completed with perfect grade (1.0).",
		technologies: [{ identifier: 'python', url: '', text: 'Python' }]
	}
];
