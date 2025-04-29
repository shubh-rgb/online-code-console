// frontend/craco.config.js

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fullySpecified: false,
      };
      return webpackConfig;
    },
  },
};
