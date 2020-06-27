module.exports = {
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.devtool = 'inline-source-map';

    return config;
  },
};
