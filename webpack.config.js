const commonConfig = require("./build/webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = env => {
  console.log(env.env);
  const envConfig = require(`./build/webpack.${env.env}.js`);
  return webpackMerge(commonConfig,envConfig);
};
