// webpack plugins
const { CheckerPlugin } = require("awesome-typescript-loader");
// utils
const { getPackageName } = require("./utils");
const { merge } = require('webpack-merge');

const getCommonWebpackConfig = (env) => require('./webpack.config.common')(env)

// imports mode based webpack config ./webpack.config.[development|production]
const getWebpackConfig = (forEnv) => require(`./webpack.config.${forEnv.mode}`)(forEnv)

function webpackConfig(
  env = {
    /* default to production mode, if no mode passed in package.json */
    mode: 'production',
    port: 9000
  }){
  // const IS_PRODUCTION = env.mode === 'production'
  // const PACKAGE_NAME = getPackageName();

  const plugins = [
    // Used for async error reporting
    // Can remove after https://github.com/webpack/webpack/issues/3460 resolved
    new CheckerPlugin(),
  ];

  console.log('ENV:', env)
  return merge(
    getCommonWebpackConfig(env),
    getWebpackConfig(env),
    {
      // devtool: IS_PRODUCTION ? false : "inline-source-map",

      // devServer: {
      //   contentBase: "./src",
      //   disableHostCheck: true,
      //   historyApiFallback: true,
      //   https: false,
      //   index: path.resolve(__dirname, "./src/index.html"),
      //   inline: true,
      //   stats: "errors-only",
      //   open: false,
      //   overlay: {
      //     warnings: true,
      //     errors: true,
      //   },
      //   port: DEV_PORT,
      // },
      mode: env.mode,
      plugins,
      // module: {
      //   rules: [
      //     {
      //       test: /\.tsx?$/,
      //       loader: require.resolve("awesome-typescript-loader"),
      //       options: {
      //         configFileName: "./tsconfig.json",
      //       },
      //     },
      //   ],
      // },
      // resolve: {
      //   extensions: [".js", ".jsx", ".ts", ".tsx"],
      // },
    }
  );
}

module.exports = webpackConfig