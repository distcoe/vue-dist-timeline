const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.base"), {
  entry: "./src/distIndexline.vue",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue-distIndexline.min.js",
    library: "vue-distIndexline",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true
    })
  ]
});
