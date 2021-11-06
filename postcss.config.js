module.exports = {
  plugins: {
    autoprefixer: {}
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/mixins.scss";`
      }
    }
  }
};
