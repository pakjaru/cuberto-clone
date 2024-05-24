/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "index.html"],
	theme: {
		extend: {
			backgroundImage: {
				preLoaderGradient: "linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(24,29,25,1) 100%)",
			},
			backgroundColor: {
				dark: "#121212",
				preLoader: "#181d19",
			},
			borderColor: {
				preLoader: "#3f423e",
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
