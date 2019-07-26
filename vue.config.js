module.exports = {
  pwa: {
    name: "Todo",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
};
