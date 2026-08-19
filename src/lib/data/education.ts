import type { TimelineEvent } from '../types';
import { DeepLearning, GraphTheory, LaTeX, MixedIntegerProgramming, R, Statistics } from './logos';

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
