type Translation = {
	de: string;
	en: string;
};

type Link = {
	url: string;
	title: Translation;
};
type Image = {
	url: string;
	alt: Translation;
	link: Link;
};
type Technology = {
	name: Translation;
	logo: Image;
};

type Project = {
	title: Translation;
	subtitle: Translation;
	description: Translation;
	technologies: Technology[];
	links: Link[];
};
