module.exports = {
    theme: {
        container: {
            center: true,
        },
        colors: {
            white: {
                default: '#ffffff',
                darker: '#F0F0F0',
            },
            black: '#000000',
            nav: '#404041',
            transparent: 'transparent',
            primary: {
                default: '#B5861F',
                lighter: '#E2D3C0',
                lightest: '#EDE6DF',
            }
        },
        fontFamily: {
            'bebas': ['Bebas Neue', 'sans-serif'],
            'montserat': ['Montserrat', 'sans-serif'],
        },

        extend: {
            height: {
                '9': '2.375rem',
                '14': '3.5rem'
            },
            width: {
                'sm': '300px',
                'md': '600px',
                'lg': '900px',
                'xl': '1200px',
            },
            screens: {
                'sm': '600px',
                'md': '900px',
                'lg': '1200px',
                'xl': '1500px',
            },
        }
    },
    variants: {},
    plugins: []
};
