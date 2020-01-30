const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        require('postcss-nested'),

        autoprefixer({
            add: true,
            grid: true
        }),


    ]
}
