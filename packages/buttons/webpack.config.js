const { getWebpackConfig, COMMON_EXTERNALS } = require("@stan-ui/webpack-config");
const { merge } = require('webpack-merge');
const path = require("path");

function webpackConfig(env) {
  return merge(
    getWebpackConfig(env),
    {
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
    }
  );
}
// webpack excepts a function which returns the config object
module.exports = webpackConfig