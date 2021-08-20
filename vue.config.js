module.exports = {
  chainWebpack(config) {
    // config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');

    config.module.rule('svg')
      .exclude.add(/\.inline\./);

    config.module.rule('vue-svg')
      .test(/\.inline\.svg/)
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    return config;
  },
};
