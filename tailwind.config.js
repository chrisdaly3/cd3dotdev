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
				taskBar: '#44444b',
				base: '#191724',
    		overlay: '#26233a',
    		muted: '#6e6a86',
    		text: '#e0def4',
    		love: '#eb6f92',
    		gold: '#f6c177',
    		rose: '#ebbcba',
    		pine: '#31748f',
    		foam: '#9ccfd8',
    		iris: '#c4a7e7',
    		highlight_high: '#524f67',
			}
		}
	},
	plugins: []
};
