export interface PersonalInfo {
	name: string;
	email: string;
	about: string;
	links?: IconLink[];
}

export interface Link {
	url: string;
	name: string;
}

export interface TextLink extends Link {
	// No additional fields for TextLink.
}

export interface IconLink extends Link {
	iconifyLogo: string;
}

export interface Milestone {
	title: string;
	description: string;
	date: string; // ISO format for date (YYYY-MM-DD)
}

export interface Activity {
	title: string;
	subtitle: string;
	description: string; // Markdown content as string
	technologies: IconLink[];
	links: TextLink[];
}

export interface Project extends Activity {
	technologies: IconLink[]; // related_name: "projects_technologies"
	links: TextLink[]; // related_name: "projects_links"
}

export interface Work extends Activity {
	technologies: IconLink[]; // related_name: "works_technologies"
	links: TextLink[]; // related_name: "works_links"
}
