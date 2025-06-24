import type { TimelineEvent } from '../types';
import { Docker, Git, GitHub, MLflow, Python, TensorFlow, VSCode } from './logos';

export const work: TimelineEvent[] = [
	{
		title: 'AI Engineer',
		subtitle: 'audit.neo, Hamburg, Germany',
		time: 'Jan 2024 – Present',
		description: `<ul>
				<li>Development of our fraud detection with an autoencoder architecture</li>
				<li>Building a chatbot system with tool-using capabilities tailored to auditors</li>
				<li>Developed various ML/OR tools for internal use</li>
			</ul>`,
		skills: [Git, GitHub, Python, TensorFlow, MLflow, Docker, VSCode]
	}
];
