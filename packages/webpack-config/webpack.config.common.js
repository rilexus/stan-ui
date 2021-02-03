
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
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  }
}

module.exports = buildCommonWebpackConfig