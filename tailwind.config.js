const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				heading: ['Lexend', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	safelist: ['text-neutral-100', 'text-white'],
	plugins: [],
};
