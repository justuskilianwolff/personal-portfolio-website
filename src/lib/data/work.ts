import type { TimelineEvent } from '../types';

export const work: TimelineEvent[] = [
	{
		title: "Master's Thesis Researcher",
		subtitle: 'Lufthansa Systems',
		time: 'Jun 2023 - Aug 2023',
		description:
			'Conducted research on the tail assignment problem using Mixed-Integer Programming, graph theory and column generation. Implementation in Python with CPLEX optimization solver.',
		technologies: [
			{ identifier: 'python', url: '', text: 'Python' },
			{ identifier: 'cplex', url: '', text: 'CPLEX' },
			{ identifier: 'latex', url: '', text: 'LaTeX' }
		]
	}
];
