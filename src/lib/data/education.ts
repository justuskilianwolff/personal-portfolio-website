import type { TimelineEvent } from '../types';

export const education: TimelineEvent[] = [
	{
		title: 'Master of Science in Operational Research with Data Science',
		subtitle: 'The University of Edinburgh (UoE)',
		time: 'Sep 2022 - Aug 2023',
		description:
			"Focus on Mixed-Integer Programming (MIP). Master's thesis in cooperation with Lufthansa Systems on The Tail Assignment Problem (83%). Graduated with distinction (75%).",
		technologies: [
			{ identifier: 'python', url: '', text: 'Python' },
			{ identifier: 'cplex', url: '', text: 'CPLEX' }
		]
	},
	{
		title: 'Bachelor of Science in Industrial Engineering and Management',
		subtitle: 'Karlsruhe Institute of Technology (KIT)',
		time: 'Oct 2018 - Aug 2022',
		description:
			"Focus on Operational Research and Statistics. Bachelor's thesis on Multi-Objective Optimization for Hyperloops (1.0). Overall grade: 1.7/4.0 (top 20%).",
		technologies: [
			{ identifier: 'python', url: '', text: 'Python' },
			{ identifier: 'r', url: '', text: 'R' }
		]
	},
	{
		title: 'Semester Abroad',
		subtitle: 'Purdue University',
		time: 'Jan 2021 - May 2021',
		description:
			"Focus on Statistics and Machine Learning as part of bachelor's degree. Perfect GPA: 4.0/4.0.",
		technologies: [
			{ identifier: 'python', url: '', text: 'Python' },
			{ identifier: 'r', url: '', text: 'R' }
		]
	},
	{
		title: 'Abitur',
		subtitle: 'Gymnasium Blankenese',
		time: 'Aug 2009 - Jul 2017',
		description: 'Graduated with Abitur (German high school diploma) in Hamburg, Germany.'
	}
];
