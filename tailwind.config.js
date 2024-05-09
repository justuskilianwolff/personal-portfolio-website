/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				first: '#004A2F',
				second: '#002F35',
				third: '#FF6337',
				fourth: '#FFA323'
			}
		}
	},
	plugins: []
};
