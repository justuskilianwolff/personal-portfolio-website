import type { TimelineEvent } from '../types';

export const workExperience: TimelineEvent[] = [
	{
		id: 'work1',
		eventType: 'work',
		title: 'Senior Software Engineer',
		organization: 'Innovatech Solutions',
		subtitle: 'Leading frontend development for flagship product',
		description:
			'Responsible for architecting and implementing new features, mentoring junior developers, and improving code quality and performance. Specialized in Svelte and TypeScript.',
		time: 'Jan 2021 - Present',
		technologies: [
			{ name: 'Svelte', logo: { name: 'Svelte', url: '/logos/svelte.png' } },
			{ name: 'TypeScript', logo: { name: 'TypeScript', url: '/logos/typescript.png' } },
			{ name: 'Node.js' },
			{ name: 'GraphQL' }
		],
		links: [{ name: 'Innovatech Website', url: 'https://innovatech.example.com' }]
	},
	{
		id: 'work2',
		eventType: 'work',
		title: 'Software Developer',
		organization: 'Web Wizards Co.',
		subtitle: 'Full-stack development on various client projects',
		description:
			'Developed and maintained web applications for a diverse range of clients, utilizing PHP, JavaScript (React, Vue), and Python. Gained experience in agile methodologies and client communication.',
		time: 'Jun 2018 - Dec 2020',
		technologies: [
			{ name: 'React', logo: { name: 'React', url: '/logos/react.png' } },
			{ name: 'JavaScript' },
			{ name: 'PHP' },
			{ name: 'Python' }
		]
	}
];
