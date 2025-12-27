/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'omrane-navy': '#0f172a',
                'omrane-orange': '#f97316',
                'omrane-accent': '#3b82f6',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Tajawal', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
