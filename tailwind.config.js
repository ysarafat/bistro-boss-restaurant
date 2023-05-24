/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                YellowOchre: '#D99904',
                SunnyYellow: '#EEFF25',
                Cinder: '#151515',
                SmokeyGrey: '#737373',
            },
        },
    },
    plugins: [require('daisyui')],
};
