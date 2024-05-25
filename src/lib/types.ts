type Link = {
	url: string;
	title: string;
};
type Image = {
	url: string;
	alt: string;
	link: Link;
};
type Technology = {
	name: string;
	logo: Image;
};

type Project = {
	title: string;
	subtitle: string;
	description: string;
	technologies: Technology[];
	links: Link[];
};
