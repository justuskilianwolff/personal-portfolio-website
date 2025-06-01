import type { TimelineEvent } from '../types';

export const educationHistory: TimelineEvent[] = [
	{
		id: 'edu1',
		eventType: 'education',
		title: 'Master of Science in Computer Science',
		organization: 'University of Advanced Technology',
		subtitle: 'Specialization in Artificial Intelligence',
		description:
			'Thesis on "Scalable Machine Learning Algorithms". Courses included Deep Learning, Natural Language Processing, and Big Data Analytics.',
		time: 'Oct 2016 - Sep 2018',
		technologies: [
			{ name: 'Python', logo: { url: '/logos/python.png', alt: 'Python Logo' } },
			{ name: 'TensorFlow' },
			{ name: 'Scikit-learn' }
		],
		logo: { url: '/logos/uat.png', alt: 'University of Advanced Technology Logo' },
		location: 'Munich, Germany'
	},
	{
		id: 'edu2',
		eventType: 'education',
		title: 'Bachelor of Science in Software Engineering',
		organization: 'Technical College of Innovation',
		subtitle: 'Focus on Web Development and Software Architecture',
		description:
			'Graduated with honors. Final project involved building a full-stack e-commerce platform.',
		time: 'Oct 2013 - Sep 2016',
		technologies: [{ name: 'Java' }, { name: 'JavaScript' }, { name: 'SQL' }],
		logo: { url: '/logos/tci.png', alt: 'Technical College of Innovation Logo' },
		location: 'Stuttgart, Germany'
	}
];
