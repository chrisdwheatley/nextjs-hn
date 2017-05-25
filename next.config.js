const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        staticFileGlobs: ["static/**/*"],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      })
    );

    config.resolve.alias = {
      react: "preact-compat/dist/preact-compat",
      "react-dom": "preact-compat/dist/preact-compat"
    };

    return config;
  }
};
