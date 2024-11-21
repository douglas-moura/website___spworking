/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'Helvetica', 'sans-serif']
            },
            colors: {
                'verde-300': '#61F2C4',
                'verde-500': '#00D6BA',
                'verde-700': '#00919A',
                'roxo-100': '#EBCAFC',
                'roxo-500': '#6500D6',
                'roxo-800': '#28007C',
            },
            backgroundImage: {
                'escritorio-banner': "url('../img/escritorio-02.jpg')",
            }
        },
    },
    plugins: [],
}

