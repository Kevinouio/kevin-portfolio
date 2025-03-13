/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E293B", // Dark Blue-Gray
                secondary: "#64748B", // Slate Gray
                background: "#0F172A", // Deep Navy
                textDark: "#E2E8F0", // Light Gray
                accent: "#06B6D4", // Cyan
            },
        },
    },
    plugins: [],
};
