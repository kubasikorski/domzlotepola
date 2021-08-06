const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.module.rule('vue').uses.delete('cache-loader');
            config.module.rule('js').uses.delete('cache-loader');
            config.module.rule('ts').uses.delete('cache-loader');
            config.module.rule('tsx').uses.delete('cache-loader');
        }
    },
    pwa: {
        themeColor: '#ede6df',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: './src/sw.js',
            swDest: 'service-worker.js',
        }
    },
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
                    '/pl/dom-zlote-pola/przyjecia-okolicznosciowe',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin/menu-od-89-zl',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin/menu-od-125-zl',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin/menu-od-188-zl',
                    '/pl/dom-zlote-pola/oferta-dla-pary-mlodej',
                    '/pl/dom-zlote-pola/oferta-dla-pary-mlodej/menu-weselne-od-208-zl',
                    '/pl/dom-zlote-pola/oferta-dla-pary-mlodej/menu-weselne-od-278-zl',
                    '/pl/dom-zlote-pola/oferta-dla-pary-mlodej/przykladowe-menu-obiad-slubny-od-188-zl',
                    '/pl/dom-zlote-pola/oferta-dla-firm',
                    '/pl/dom-zlote-pola/oferta-dla-firm/menu-bufet-kawowy',
                    '/pl/dom-zlote-pola/oferta-dla-firm/menu-biznes-lunch',
                    '/pl/dom-zlote-pola/oferta-dla-firm/menu-spotkanie-swiateczne',
                    '/pl/dom-zlote-pola/nasze-jedzenie',
                    '/pl/dom-zlote-pola/nasze-jedzenie/galeria',
                    '/pl/dom-zlote-pola/galeria',
                    '/pl/bawialnia-dla-dzieci',
                    '/pl/pokoje',
                    '/pl/pokoje/oferta',
                    '/pl/kontakt',
                    '/pl/fundusze-ue',
                    '/pl/fundusze-ue/fundusze-ue/poddzialania-02-02-01',
                    '/pl/fundusze-ue/projekt-grantowy-spektrum',
                ],
                server: {
                    port: 8080
                },
            })
        ]
    }
}