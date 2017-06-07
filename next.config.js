const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      return config;
    }

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
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
