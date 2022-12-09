const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const path = require('path');
const {VUE_APP_SERVER_URL, VUE_APP_CLIENT_PORT} = process.env;

module.exports = {
  outputDir: path.join(__dirname, '..', 'server', 'public'),
  devServer: {
    port: VUE_APP_CLIENT_PORT,
    proxy: VUE_APP_SERVER_URL
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/config.scss";
          @import "@/styles/mixins.scss";
        `
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: /sprites/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: './img/sprite.svg',
                runtimeCompat: true
              }
            },
            'svg-transform-loader',
            'svgo-loader'
          ]
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin({
        plainSprite: true
      })
    ]
  }
}