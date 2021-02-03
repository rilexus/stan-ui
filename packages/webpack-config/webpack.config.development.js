const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const {getPackageName} = require("./utils");

function buildDevelopmentWebpackConfig (
  env = {
    /* default to production mode, if no mode passed in package.json */
    mode: 'development',
    port: 8000 // port is passed in package.json
  }){
  const PACKAGE_NAME = getPackageName();

  return {
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./src",
      disableHostCheck: true,
      historyApiFallback: true,
      https: false,
      index: path.resolve(__dirname, "./src/index.html"),
      inline: true,
      stats: "errors-only",
      open: false,
      overlay: {
        warnings: true,
        errors: true,
      },
      port: env.port,
    },
    plugins: [
      new WebpackNotifierPlugin({ title: PACKAGE_NAME }),
    ]
  }
}

module.exports = buildDevelopmentWebpackConfig