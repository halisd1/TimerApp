var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      NavBar: 'app/components/NavBar.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Test: 'app/components/testcode.jsx',
      Clock: 'app/components/Clock.jsx',
      appStyles: 'app/styles/app.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  module:{
      loaders: [
        {
          loaders: ['style','css', 'sass'],
          test: /\.scss$/
        },
        {
          loader:
          'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ],
  },
  devtool: 'eval-source-map'
};
