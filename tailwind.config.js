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
                'escritorio-banner': "url('../img/spw-espaco-sala-compartilhadas-01.jpg')",
                'shop-butanta': "url('../img/butanta-shopping.webp')",
                'merc-pao-acucar': "url('../img/pao-de-acucar.jpg')",
                'merc-sams-club': "url('../img/sams-club.jpg')",
                'corr-onibus': "url('../img/ponto-onibus.jpg')",
            }
        },
    },
    plugins: [],
}

