const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//module settings 
module.exports = function (env){
    
  let production = env === 'production';
    
    return {
      //basic path to project
      context: path.resolve(__dirname, './src'),

      //entry JS
      entry: {
        main: [
          './js/handleStartGame.js',
          './sass/style.scss'
        ],
      },
        
      devtool: 'source-map',

      output: {
        filename: production ? 'js/[name].min.js' : 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
      },

      module: {
        rules: [
          //babel 
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          //scss
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                    minimize: production     
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {sourceMap: true}
                },
                {
                  loader: 'sass-loader',
                  options: {sourceMap: true}
                }
              ],
              fallback: 'style-loader',
            })
          },

          // img
          {
            test: /\.(png|gif|jpe?g|ico)$/,
            loaders: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
              },
              'img-loader',
            ]
          },
         // Fonts
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
              }
            ]
          }
        ]
      },

      plugins: production ? [
        new ExtractTextPlugin(
          './css/[name].min.css'
        ), 
        new CleanWebpackPlugin(['dist']),    
        new CopyWebpackPlugin(
          [
            {from: './img', to: 'img'},
            {from: './media', to: 'media'}
          ]
        )] :  [
        new ExtractTextPlugin(
          './css/[name].css'
        ),    
        new CleanWebpackPlugin(['dist']),    
        new CopyWebpackPlugin(
          [
            {from: './img', to: 'img'},
            {from: './media', to: 'media'}
          ]
        )
      ]
    };
}