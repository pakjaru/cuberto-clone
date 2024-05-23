/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "index.html"],
	theme: {
		extend: {
			backgroundColor: {
				dark: "#121212",
			},
			colors: {
				tetriary: "#e0fd60",
				grey: "#454545",
			},
			content: {
				dataText: "attr(data-text)",
			},
			transitionProperty: {
				transformRadius: "transform, border-radius",
			},
			transitionDuration: {
				transformRadius: "0.5s, 0.5s",
				transformRadiusHover: "0.5s, 0.9s",
			},
			animation: {
				blink: "blinking backwards 1s steps(1) infinite",
			},
			keyframes: {
				blinking: {
					"0%, 100%": { opacity: 0 },
					"50%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
}
