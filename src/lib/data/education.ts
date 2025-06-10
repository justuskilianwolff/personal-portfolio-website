import type { TimelineEvent } from '../types';
import { DeepLearning, GraphTheory, LaTeX, MixedIntegerProgramming, R, Statistics } from './logos';

export const education: TimelineEvent[] = [
	{
		title: 'Master of Science in Operational Research with Data Science',
		subtitle: 'The University of Edinburgh (UoE)',
		time: 'Sep 2022 - Aug 2023',
		description: `<ul>
	<li>Focus: Mixed-Integer Programming (MIP)</li>
	<li>Master's Thesis: Collaboration with Lufthansa Systems on <em>The Tail Assignment Problem</em></li>
</ul>`,
		skills: [MixedIntegerProgramming, GraphTheory, LaTeX]
	},
	{
		title: 'Bachelor of Science in Industrial Engineering and Management',
		subtitle: 'Karlsruhe Institute of Technology (KIT)',
		time: 'Oct 2018 - Aug 2022',
		description: `<ul>
	<li>Focus: Operational Research and Statistics</li>
	<li>Bachelor's Thesis: <em>Multi-Objective Optimization for Hyperloops</em></li>
</ul>`,
		skills: [MixedIntegerProgramming, GraphTheory, DeepLearning]
	},
	{
		title: 'Semester Abroad',
		subtitle: 'Purdue University',
		time: 'Jan 2021 - May 2021',
		description: `<ul>
	<li>Focus: Statistics and Machine Learning as part of bachelor's degree</li>
</ul>`,
		skills: [R, Statistics]
	}
];
