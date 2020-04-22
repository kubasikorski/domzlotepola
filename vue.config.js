const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // config.module.rule('vue').uses.delete('cache-loader');
            // config.module.rule('js').uses.delete('cache-loader');
            // config.module.rule('ts').uses.delete('cache-loader');
            // config.module.rule('tsx').uses.delete('cache-loader');
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
                    '/pl/dom-zlote-pola/oferta-dla-rodzin',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin/menu-1',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin/menu-2',
                    '/pl/dom-zlote-pola/oferta-dla-rodzin/menu-3',
                    '/pl/dom-zlote-pola/oferta-dla-pary-mlodej',
                    '/pl/dom-zlote-pola/oferta-dla-firm',
                    '/pl/dom-zlote-pola/nasze-jedzenie',
                    '/pl/dom-zlote-pola/nasze-jedzenie/galeria',
                    '/pl/bawialnia-dla-dzieci',
                    '/pl/pokoje',
                    '/pl/kontakt'
                ],
                server: {
                    port: 8081
                },
                renderer: new Renderer({
                    maxConcurrentRoutes: 4,
                    renderAfterTime: 2000,
                    headless: true
                })
            })
        ]
    }
}