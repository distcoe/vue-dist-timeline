const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.base"), {
  entry: "./src/distTimeline.vue",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vue-distTimeline.min.js",
    library: "vue-distTimeline",
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
