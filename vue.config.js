const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [ '/', '/pl', '/pl/o-mnie' ],
                postProcess: function (context) {
                    let titles = {
                        '/': 'Home',
                        '/pl/o-mnie': 'O Mnie',
                    }
                    context.html = context.html.replace(
                        /<title>[^<]*<\/title>/i,
                        `<title>${titles[context.route]}</title>`
                    )
                    return context
                }
            })
        ]
    }
}