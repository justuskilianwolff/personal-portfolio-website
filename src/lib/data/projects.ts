import type { TimelineEvent } from '../types';

export const projects: TimelineEvent[] = [
	{
		id: 'proj1',
		eventType: 'project',
		title: 'Personal Portfolio Website',
		subtitle: 'A SvelteKit and TypeScript showcase of my work and skills.',
		description:
			'The very website you are currently viewing. Designed to be fast, accessible, and easily updatable with new experiences and projects. Leverages TypeScript for type safety and SvelteKit for a modern development experience.',
		time: 'May 2024 - Present',
		technologies: [
			{ identifier: 'SvelteKit', url: '/logos/sveltekit.png', text: 'SvelteKit' },
			{ identifier: 'TypeScript', url: '/logos/typescript.png', text: 'TypeScript' },
			{ identifier: 'HTML5', url: '/logos/html5.png', text: 'HTML5' },
			{ identifier: 'CSS3', url: '/logos/css3.png', text: 'CSS3' }
		],
		links: [
			{ identifier: 'GitHub Repository', url: 'https://github.com/yourusername/personal-website' }
		]
	},
	{
		id: 'proj2',
		eventType: 'project',
		title: 'Open Source Contribution: AwesomeLib',

		subtitle: 'Enhanced documentation and added new features to a popular utility library.',
		description:
			'Contributed to an open-source JavaScript library by improving its documentation for clarity, fixing several reported bugs, and implementing two new helper functions requested by the community. Gained experience with collaborative development workflows and code review processes.',
		time: 'Feb 2023 - Apr 2023',
		technologies: [
			{ identifier: 'JavaScript (ES6+)', url: '/logos/javascript.png', text: 'JavaScript (ES6+)' },
			{ identifier: 'Jest', url: '/logos/jest.png', text: 'Jest' },
			{ identifier: 'Git & GitHub', url: '/logos/github.png', text: 'Git & GitHub' }
		],
		links: [
			{
				identifier: 'My Pull Requests',
				url: 'https://github.com/awesomelib/awesomelib/pulls?q=is%3Apr+author%3Ayourusername'
			}
		]
	}
];
