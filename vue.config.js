const path = require("path");
const resolve = dir => path.join(__dirname, dir);

// 两种设置方法
module.exports = {
  // chainWebpack: config => {
  //   // 添加别名
  //   config.resolve.alias
  //       .set("vue$", "vue/dist/vue.esm.js")
  //       .set("@", resolve("src"))
  //       .set("assets", resolve("src/assets"))
  //       .set("common", resolve("src/common"))
  //       .set("components", resolve("src/components"))
  //       .set("network", resolve("src/network"))
  //       .set("views", resolve("src/views"))
  // }
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'common':'@/common',
        'views':'@/views',
      }
    }
  },

  // 避免因本机wif网络变换导致sockjs.js报错
  devServer:{
    host: 'localhost',
    port: 8080,
  }
  // 另：sockjs.js报错的原因可能是本机网络ip变化没有重新npm run serve而导致network不再是本机的ip，找不到这个ip
  // 也可能是浏览器中使用代理服务，导致实际浏览器中的ip不是network（?不过应该是全局代理才会这样吧）
  // 改了之后，npm run serve下面的running at里的network就不再是ip地址而是localhost
}

