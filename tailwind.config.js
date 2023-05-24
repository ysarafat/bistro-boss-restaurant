/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                yellowOchre: '#D99904',
                sunnyYellow: '#EEFF25',
                cinder: '#151515',
                smokeyGrey: '#737373',
            },
            fontFamily: {
                cinzel: ['Cinzel, serif'],
            },
        },
    },
    plugins: [require('daisyui')],
};
