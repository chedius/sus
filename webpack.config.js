const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
         test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
             "css-loader",
             // Compiles Sass to CSS
            "sass-loader",
        ],
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: 'src/index.html'
      })
      ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
      },
  };