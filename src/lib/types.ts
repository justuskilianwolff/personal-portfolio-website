export type Link = {
	url: string;
	text?: string; // Optional text for the link, e.g., 'GitHub', 'LinkedIn'
};

export type Icon = {
	identifier: string; // e.g., 'github', 'linkedin'
	hint?: string;
	url?: string;
};

export type TimelineEvent = {
	title: string;
	subtitle?: string;
	time: string; // Simple string e.g., "2020-2022", "Jan 2023 - Present"
	description: string;
	skills?: Icon[];
	links?: Link[];
};
