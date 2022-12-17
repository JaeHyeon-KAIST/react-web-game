const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const webpack = require('webpack');

const webpackMode = process.env.NODE_ENV || "development";

module.exports = {
  name: 'word-relay-dev',
  // mode: 'development',
  mode: webpackMode,
  // devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './src/client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['> 5% in KR', 'last 2 chrome versions']},
            debug: true,
          }],
          '@babel/preset-react',
        ],
        // plugins: ['react-refresh/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new ReactRefreshWebpackPlugin(),
  ],
  output: {
    // path: path.join(__dirname, 'dist'),
    // filename: '[name].js',
    path: path.resolve("./dist"),
    filename: "[name].min.js",
  },
  devServer: {
    // devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
    port: 8084,
    allowedHosts: "all",
    host: "0.0.0.0",
  }
};

// const path = require('path');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const webpack = require('webpack');

// const webpackMode = process.env.NODE_ENV || "development";

// module.exports = {
//   name: 'word-relay-dev',
//   // mode: 'development',
//   mode: webpackMode,
//   devtool: 'inline-source-map',
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   entry: {
//     app: './client',
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?$/,
//       loader: 'babel-loader',
//       options: {
//         presets: [
//           ['@babel/preset-env', {
//             targets: {browsers: ['last 2 chrome versions']},
//             debug: true,
//           }],
//           '@babel/preset-react',
//         ],
//         plugins: ['react-refresh/babel'],
//       },
//       exclude: path.join(__dirname, 'node_modules'),
//     }],
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new ReactRefreshWebpackPlugin(),
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: '[name].js',
//     publicPath: '/dist',
//   },
//   devServer: {
//     devMiddleware: { publicPath: '/dist' },
//     static: { directory: path.resolve(__dirname) },
//     hot: true,
//     port: 8084,
//     allowedHosts: "all",
//     host: "0.0.0.0"
//   }
// };