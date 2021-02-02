const { baseConfig, COMMON_EXTERNALS } = require("@stan-ui/webpack-config");
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = merge( baseConfig, {
  entry: {
    buttons: [
      "./src/index.ts"
    ],
  },

  externals: COMMON_EXTERNALS,

  output: {
    filename: "[name].bundle.js",
    library: ["StanUI", "Buttons"],
    libraryTarget: "umd",
    path: path.resolve(__dirname, "./dist")
  },
});