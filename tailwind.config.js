/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    sidebar: "#E3DAC9", // Bone/Beige (Sidebar/Header)
                    bg: "#8A8A8A",      // Gray (Main Content)
                    primary: "#B22222", // Firebrick (Accents)
                }
            },
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'], // Body
                heading: ['Impact', 'sans-serif'],          // Headings
            }
        },
    },
    plugins: [],
}
