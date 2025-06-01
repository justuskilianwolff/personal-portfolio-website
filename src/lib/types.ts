export type Link = {
	url: string;
	title: string;
};

export type Image = {
	url: string;
	alt: string;
	link?: Link;
};

export type Technology = {
	name: string;
	logo?: Image; // Image was already updated, made optional
};

// Old Project type removed

export type TimelineEvent = {
	id: string; // Unique identifier
	eventType: 'work' | 'education' | 'project'; // Category

	title: string;
	subtitle?: string;
	organization?: string; // e.g., Company Name, University
	description: string;

	time: string; // Simple string e.g., "2020-2022", "Jan 2023 - Present"

	technologies?: Technology[];
	links?: Link[];
	logo?: Image; // e.g., company/university/project logo
	location?: string; // Optional location field
};
