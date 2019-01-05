// 代理多个条目

// 通过用 JavaScript 定义此配置，你还可以把多个条目代理到同一个目标。

// 将代理配置文件设置为 proxy.conf.js（代替 proxy.conf.json），并指定如下例子中的配置文件。

const PROXY_CONFIG = [
    {
        context: [
            "/my",
            "/many",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "http://localhost:3000",
        secure: false
    }
]
 
module.exports = PROXY_CONFIG;

// 在 CLI 配置文件 angular.json 中，指向 JavaScript 配置文件：

// ...
// "architect": {
//   "serve": {
//     "builder": "@angular-devkit/build-angular:dev-server",
//     "options": {
//       "browserTarget": "your-application-name:build",
//       "proxyConfig": "src/proxy.conf.js"
//     },
// ...