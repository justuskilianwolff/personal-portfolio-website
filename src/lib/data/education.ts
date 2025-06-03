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
			{ identifier: 'Python', url: '/logos/python.png', text: 'Python' },
			{ identifier: 'TensorFlow', url: '/logos/tensorflow.png', text: 'TensorFlow' },
			{ identifier: 'Scikit-learn', url: '/logos/scikit-learn.png', text: 'Scikit-learn' }
		]
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
		technologies: [
			{ identifier: 'Java', url: '/logos/java.png', text: 'Java' },
			{ identifier: 'JavaScript', url: '/logos/javascript.png', text: 'JavaScript' },
			{ identifier: 'SQL', url: '/logos/sql.png', text: 'SQL' }
		]
	}
];
