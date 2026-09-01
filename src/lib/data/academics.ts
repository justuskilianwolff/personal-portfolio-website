import type { TimelineEvent } from '../types';
import {
	CPLEX,
	DeepLearning,
	GraphTheory,
	LaTeX,
	MixedIntegerProgramming,
	Python,
	R,
	Statistics
} from './logos';

export const education: TimelineEvent[] = [
	{
		title: 'MSc Operational Research with Data Science',
		subtitle: 'School of Mathematics, University of Edinburgh',
		time: 'Sep 2022 - Aug 2023',
		description: {
			text: 'Advanced studies in operational research:',
			bullets: [
				'Focus: Mixed Integer Programming with applications in logistics',
				'Thesis: The Tail Assignment Problem in cooperation with Lufthansa Systems'
			]
		},
		skills: [MixedIntegerProgramming, GraphTheory, LaTeX]
	},
	{
		title: 'BSc Industrial Engineering and Management',
		subtitle: 'Department of Economics and Management, Karlsruhe Institute of Technology (KIT)',
		time: 'Oct 2018 - Aug 2022',
		description: {
			text: 'Industrial engineering with early specialisation in operational research:',
			bullets: [
				'Focus: Operational Research and Statistics',
				'Thesis: Multi-Objective Optimisation for Hyperloops at the Institute of Operations Research'
			]
		},
		skills: [MixedIntegerProgramming, GraphTheory, DeepLearning]
	},
	{
		title: 'Visiting Student',
		subtitle: 'Purdue University',
		time: 'Jan 2021 - May 2021',
		description: {
			text: 'Semester abroad focused on statistics and machine learning.'
		},
		skills: [R, Statistics]
	}
];

export const teaching: TimelineEvent[] = [
	{
		title: 'Teaching Assistant',
		subtitle: 'Karlsruhe Institute of Technology (KIT)',
		time: 'Apr 2020 - Aug 2020',
		description: {
			text: 'Prepared and led tutorial sessions for "Introduction to Operations Research I"'
		},
		skills: [MixedIntegerProgramming, GraphTheory]
	}
];

export const research: TimelineEvent[] = [
	{
		title: 'EV Charger Placement Optimization',
		subtitle: 'Published Research & AIMMS-MOPTA Competition',
		time: 'Feb 2023 - Jan 2026',
		description: {
			text: 'Stochastic optimisation for determining electric vehicle charger locations. Developed and implemented a model for the 15th AIMMS-MOPTA Optimization Modeling Competition.'
		},
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
	}
];
