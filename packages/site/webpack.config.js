const { baseConfig } = require("@stan-ui/webpack-build");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = Object.assign({}, baseConfig, {
  entry: {
    "site": ["./src/index.tsx",]
  },
  module: {
    rules: baseConfig.module.rules.slice(0, 2).concat([
      {
        test: /^((?!svgs).)*\.(eot|ttf|woff|woff2|svg|png)$/,
        loader: require.resolve("file-loader"),
      },
    ]),
  },
  plugins: baseConfig.plugins.concat([
    new CopyWebpackPlugin({
      patterns: [
        // to: is relative to dist/
        // { from: "src/assets", to: "assets" },
        { from: "src/index.html", to: "." },
      ],
    }),
  ]),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
});