const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  performance: {
    hints: false,
  },

  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./app"),
    filename: "[name].js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    //contentBase: path.join(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 9999,
  },
  plugins: [
    // применять изменения только при горячей перезагрузке
    new webpack.HotModuleReplacementPlugin({
      context: __dirname,
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20,
    }),
    new HtmlWebpackPlugin({
      title: "Songbird",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      // CSS, PostCSS, Sass
      {
      test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|mp3)$/i,
        type: "asset/inline",
      },
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {},
      },
    ],
  },
};
