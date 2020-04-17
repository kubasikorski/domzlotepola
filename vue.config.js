const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {

    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: [
                    '/',
                    '/pl/',
                    '/pl/home',
                    '/pl/o-mnie',
                    '/pl/dom-zlote-pola',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin',
                    '/pl/dom-zlote-pola/oferta-dla-pary-mlodej',
                    '/pl/dom-zlote-pola/oferta-dla-firm',
                    '/pl/dom-zlote-pola/nasze-jedzenie',
                    '/pl/dom-zlote-pola/nasze-jedzenie/galeria',
                    '/pl/bawialnia-dla-dzieci',
                    '/pl/pokoje',
                    '/pl/kontakt'
                ],

            })
        ]
    }
}