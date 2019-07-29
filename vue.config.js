module.exports = {
  pwa: {
    name: "Todo",
    themeColor: "#fafafa",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};
