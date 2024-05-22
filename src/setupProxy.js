const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/create_cache",
    createProxyMiddleware({
      target:
        "https://23up4yfe42aq3iaggfo726rzqu0wntdo.lambda-url.us-west-2.on.aws",
      changeOrigin: true,
      pathRewrite: {
        "^/api/create_cache": "/create_cache", // Rewrite the target path
      },
    })
  );

//   app.use(
//     "/api/get_cache/:retrievalId",
//     createProxyMiddleware({
//       target:
//         "https://wip7mhydwhcixryqgshs6em4te0nxrks.lambda-url.us-west-2.on.aws",
//       changeOrigin: true,
//       pathRewrite: {
//         // Rewrite the target path to include the retrievalId
//         "^/api/get_cache/": "/get_cache/online-clipboard/",
//       },
//     })
//   );
};
