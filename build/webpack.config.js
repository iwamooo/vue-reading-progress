var webpack = require('webpack')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/../dist/js`,
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'stylelint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [
            require('postcss-import')(),
            require('postcss-mixins')(),
            require('postcss-size')(),
            require('postcss-nested')(),
            require('postcss-simple-vars')(),
            require('autoprefixer')({
              "browsers": [
                "ie 11",
                "last 1 Edge versions",
                "last 1 Firefox versions",
                "last 1 Chrome versions",
                "last 1 Safari versions",
                "iOS >= 8",
                "Android >= 4.2",
                "last 1 ChromeAndroid versions"
              ]
            }),
            require('postcss-color-function')(),
            require('postcss-calc')(),
            require('postcss-custom-media')(),
            require('css-mqpacker')(),
            require('postcss-assets')()
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
