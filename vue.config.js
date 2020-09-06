module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~reset.css";
          @import "~@/styles/global.scss";`
      }
    }
  }
}
