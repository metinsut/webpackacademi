const commonPath = require('./common-path'); 

const config = {
    entry: "./src",
    output: {
      filename: "main.js",
      path: commonPath.outputPath
    }
};


module.exports = config;