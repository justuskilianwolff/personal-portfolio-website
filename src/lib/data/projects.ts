import type { TimelineEvent } from '../types';

export const projects: TimelineEvent[] = [
	{
		id: 'proj1',
		eventType: 'project',
		title: 'Personal Portfolio Website',
		organization: 'Personal Project', // Or could be a client name if applicable
		subtitle: 'A SvelteKit and TypeScript showcase of my work and skills.',
		description:
			'The very website you are currently viewing. Designed to be fast, accessible, and easily updatable with new experiences and projects. Leverages TypeScript for type safety and SvelteKit for a modern development experience.',
		time: 'May 2024 - Present',
		technologies: [
			{ name: 'SvelteKit', logo: { name: 'SvelteKit', url: '/logos/sveltekit.png' } },
			{ name: 'TypeScript', logo: { name: 'TypeScript', url: '/logos/typescript.png' } },
			{ name: 'HTML5' },
			{ name: 'CSS3' }
		],
		links: [
			{ name: 'GitHub Repository', url: 'https://github.com/yourusername/personal-website' }
		],
	},
	{
		id: 'proj2',
		eventType: 'project',
		title: 'Open Source Contribution: AwesomeLib',
		organization: 'Community Project',
		subtitle: 'Enhanced documentation and added new features to a popular utility library.',
		description:
			'Contributed to an open-source JavaScript library by improving its documentation for clarity, fixing several reported bugs, and implementing two new helper functions requested by the community. Gained experience with collaborative development workflows and code review processes.',
		time: 'Feb 2023 - Apr 2023',
		technologies: [{ name: 'JavaScript (ES6+)' }, { name: 'Jest' }, { name: 'Git & GitHub' }],
		links: [
			{
				name: 'My Pull Requests',
				url: 'https://github.com/awesomelib/awesomelib/pulls?q=is%3Apr+author%3Ayourusername'
			}
		]
	}
];
