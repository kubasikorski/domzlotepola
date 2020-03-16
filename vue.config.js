const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {

    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [
                    '/',
                    '/pl/',
                    '/pl/o-mnie',
                    '/pl/dom-zlote-pola',
                    '/pl/dom-zlote-pola/nasze-jedzenie',
                    '/pl/bawialnia-dla-dzieci',
                    '/pl/pokoje',
                    '/pl/kontakt'
                ],

            })
        ]
    }
}