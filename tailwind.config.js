const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Anonymous Pro"', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				exit: '#fe5f58',
				exitHover: '#990000',
				minimize: '#febc2e',
				expand: '#28c841',
				taskBar: '#44444b'
			}
		}
	},
	plugins: []
};
