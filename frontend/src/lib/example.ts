import type { Link, TextLink, IconLink, Milestone, Activity, Project, Work } from './types';

const title = 'Example';
const subtitle = 'Subtitle';
const description =
	'This is a really long description that should be truncated in the card. I hope it actually works. This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.This is a really long description that should be truncated in the card. I hope it actually works.';
const svelte: IconLink = {
	url: 'https://svelte.dev',
	name: 'Svelte',
	iconifyLogo: 'logos:svelte'
};

const django: IconLink = {
	url: 'https://www.djangoproject.com/',
	name: 'Django',
	iconifyLogo: 'logos:django-icon'
};

const repo: TextLink = {
	url: 'www.github.com/justuskilianwolff',
	name: 'GitHub'
};
const media: TextLink = {
	url: 'www.instagram.com/justuskilianwolff',
	name: 'Instagram'
};

export const project: Project = {
	title,
	subtitle,
	description,
	technologies: [svelte, django],
	links: [repo, media]
};
