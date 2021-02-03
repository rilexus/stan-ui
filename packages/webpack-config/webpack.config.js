// utils
const { merge } = require('webpack-merge');

const getCommonWebpackConfig = (env) => require('./webpack.config.common')(env)

// imports mode based webpack config ./webpack.config.[development|production].js
const getWebpackConfig = (forEnv) => require(`./webpack.config.${forEnv.mode}`)(forEnv)

function buildCommonWebpackConfig(
  env = {
    /* default to production mode, if no mode passed in package.json */
    mode: 'production',
    port: 9000
  }){
  const config = merge(
    getCommonWebpackConfig(env),
    getWebpackConfig(env),
    {
      mode: env.mode,
    }
  );
  return config
}

module.exports = buildCommonWebpackConfig