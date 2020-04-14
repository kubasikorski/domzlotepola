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
            graycaption:'#c5a764',
            black: '#000000',
            nav: '#404041',
            graphite: '#777777',
            transparent: 'transparent',
            primary: {
                default: '#B5861F',
                lighter: '#E2D3C0',
                lightest: '#EDE6DF',
            },
            shadow: {
                default: '#BEA27D',
                lighter: '#E2D3C0',
                lightest: '#EDE6DF',
            }
        },
        fontFamily: {
            'bebas': ['Bebas Neue', 'sans-serif'],
            'montserat': ['Montserrat', 'sans-serif'],
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },

        extend: {
            height: {
                '9': '2.375rem',
                '14': '3.5rem',
                '80': '18rem',
                '120': '24rem',
                '160': '36rem',
            },
            width: {
                'sm': '300px',
                'md': '600px',
                'lg': '900px',
                'xl': '1200px',
            },
            spacing: {
                '80': '18rem',
                '96': '20rem',
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
