import type { TimelineEvent } from '../types';
import { DeepLearning, GraphTheory, LaTeX, MixedIntegerProgramming, R, Statistics } from './logos';

export const education: TimelineEvent[] = [
	{
		title: "Master's, Operational Research with Data Science @ School of Mathematics",
		subtitle: 'The University of Edinburgh',
		time: 'Sep 2022 - Aug 2023',
		description: `Advanced studies in operational research:
<ul>
	<li>Focus: Mixed Integer Programming with applications in logistics</li>
	<li>Thesis: The Tail Assignment Problem in cooperation with Lufthansa Systems</li>
</ul>`,
		skills: [MixedIntegerProgramming, GraphTheory, LaTeX]
	},
	{
		title: "Bachelor's, Industrial Engineering and Management @ Department of Economics and Management",
		subtitle: 'Karlsruhe Institute of Technology (KIT)',
		time: 'Oct 2018 - Aug 2022',
		description: `Industrial engineering with early specialisation in operational research:
<ul>
	<li>Focus: Operational Research and Statistics</li>
	<li>Thesis: Multi-Objective Optimisation for Hyperloops at the Institute of Operations Research</li>
</ul>`,
		skills: [MixedIntegerProgramming, GraphTheory, DeepLearning]
	},
	{
		title: 'Visiting Student',
		subtitle: 'Purdue University',
		time: 'Jan 2021 - May 2021',
		description: `Semester abroad broadening into statistics and machine learning`,
		skills: [R, Statistics]
	}
];
