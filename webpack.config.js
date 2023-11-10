const path = require('path');
const yaml = require('yamljs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: './src/index.js',
   devServer: {
    static: './dist',
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },

   plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack template',
      template: 'src/template.html'
    }),
   ],
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(csv|tsv)$/i,
         use: ['csv-loader'],
       },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      
     ],
   },
 };