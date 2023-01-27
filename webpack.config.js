const PrerenderSPAPlugin = require('prerender-spa-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const jsonRoutes = require('./routes.json')

console.log(jsonRoutes.routes)

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'build'),
      // Required - Routes to render.
      routes: [ '/', '/cours', '/liens' ],
    })
  ]
}