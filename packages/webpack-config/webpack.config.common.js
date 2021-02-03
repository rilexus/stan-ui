const { CheckerPlugin } = require("awesome-typescript-loader");
// development and production common configuration
function buildCommonWebpackConfig(env){
  return {
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
    plugins: [
      // Used for async error reporting
      // Can remove after https://github.com/webpack/webpack/issues/3460 resolved
      new CheckerPlugin(),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  }
}

module.exports = buildCommonWebpackConfig