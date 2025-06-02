export type Link = {
	url: string;
	text?: string; // Optional text for the link, e.g., 'GitHub', 'LinkedIn'
};

export type Icon = {
	name: string; // e.g., 'github', 'linkedin'
};
export type IconLink = Link & Icon;

export type Image = {
	url: string;
	alt: string;
	link?: Link;
};

export type Technology = {
	name: string;
	logo?: IconLink;
};

export type TimelineEvent = {
	id: string; // Unique identifier
	eventType: 'work' | 'education' | 'project'; // Category

	title: string;
	subtitle?: string;
	organization?: string; // e.g., Company Name, University

	time: string; // Simple string e.g., "2020-2022", "Jan 2023 - Present"
	description: string;

	technologies?: Technology[];
	links?: IconLink[];
};
