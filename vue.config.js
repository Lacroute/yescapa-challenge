module.exports = {
  publicPath: "/serve-it",
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
