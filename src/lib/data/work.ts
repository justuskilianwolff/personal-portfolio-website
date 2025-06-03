import type { TimelineEvent } from '../types';

export const workExperience: TimelineEvent[] = [
	{
		id: 'work1',
		eventType: 'work',
		title: 'Senior Software Engineer',
		subtitle: 'Leading frontend development for flagship product',
		description:
			'Responsible for architecting and implementing new features, mentoring junior developers, and improving code quality and performance. Specialized in Svelte and TypeScript.',
		time: 'Jan 2021 - Present',
		technologies: [
			{ identifier: 'svelte', url: 'https://svelte.dev/' },
			{ identifier: 'TypeScript', url: 'https://www.typescriptlang.org/' },
			{ identifier: 'Node.js', url: 'https://nodejs.org/' },
			{ identifier: 'GraphQL', url: 'https://graphql.org/' }
		],
		links: [{ identifier: 'Innovatech Website', url: 'https://innovatech.example.com' }]
	},
	{
		id: 'work2',
		eventType: 'work',
		title: 'Software Developer',
		subtitle: 'Full-stack development on various client projects',
		description:
			'Developed and maintained web applications for a diverse range of clients, utilizing PHP, JavaScript (React, Vue), and Python. Gained experience in agile methodologies and client communication.',
		time: 'Jun 2018 - Dec 2020',
		technologies: [
			{
				identifier: 'linkedin',
				url: 'https://www.linkedin.com/in/justuskilianwolff/',
				text: 'justuskilianwolff.com'
			},
			{
				identifier: 'JavaScript',
				url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				text: 'JavaScript'
			},
			{ identifier: 'PHP', url: 'https://www.php.net/', text: 'PHP' },
			{ identifier: 'Python', url: 'https://www.python.org/', text: 'Python' }
		]
	}
];
