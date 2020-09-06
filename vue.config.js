module.exports = {
  publicPath: "/yescapa-challenge",
  outputDir: "docs",
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
