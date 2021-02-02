const path = require("path");
// webpack plugins
const { CheckerPlugin } = require("awesome-typescript-loader");
const WebpackNotifierPlugin = require("webpack-notifier");

// utils
const { getPackageName } = require("./utils");

function webpackConfig(
  env = {
    /* default to production mode, if no mode passed in package.json */
    mode: 'production',
    port: 9000
  }){
  const IS_PRODUCTION = env.mode === 'production'
  const DEV_PORT = env.port || 9000;
  const PACKAGE_NAME = getPackageName();
  /**
   * Configure plugins loaded based on environment.
   */
  const plugins = [
    // Used for async error reporting
    // Can remove after https://github.com/webpack/webpack/issues/3460 resolved
    new CheckerPlugin(),
  ];

  if (!IS_PRODUCTION) {
    plugins.push(
      // Trigger an OS notification when the build succeeds in dev mode.
      new WebpackNotifierPlugin({ title: PACKAGE_NAME }),
    );
  }


  console.log('ENV:', env)
  return {
    devtool: IS_PRODUCTION ? false : "inline-source-map",

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
      port: DEV_PORT,
    },
    mode: env.mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            configFileName: "./tsconfig.json",
          },
        },
      ],
    },
    plugins,
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  };
}

module.exports = webpackConfig