/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// https://colorhunt.co/palette/f5efe7d8c4b64f709c213555
				first: '#213555',
				second: '#F5EFE7',
				third: '#4F709C',
				fourth: '#D8C4B6'
			},
			fontFamily: {
				playfair: ['Playfair', 'serif']
			}
		},
		plugins: []
	}
};
