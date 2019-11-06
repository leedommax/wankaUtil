####1.配置rollup
1.1 插件rollup-plugin-json，支持引入json   
1.2 插件rollup-plugin-node-resolve 支持引入第三方包   
1.3 插件rollup-plugin-commonjs 支持commonjs模块   
1.4 插件rollup-plugin-node-builtins 支持node内置模块   
1.5 插件rollup-plugin-babel 支持es6语法  增加babel配置文件
1.6 插件rollup-plugin-eslint 代码审查 增加eslint配置文件     
1.7 插件rollup-plugin-uglify 生产环境压缩代码 
1.8 rollup配置文件
```
export default {
  input: 'src/main',
  output: {
    file: destFilePath,
    format: 'umd', // 模块类型
    name: 'wankaUtil', //全局名
    sourceMap: isProd
  },
  external: [],// 无需打包的第三方包
  plugins: plugins
}
```

####2.命令
```
    "dev": "rollup -w -c --environment NODE_ENV:development", //监听热更新
    "test": "rollup  -c --environment NODE_ENV:development",  // 打包不压缩
    "build": "rollup -c --environment NODE_ENV:production" // 打包压缩
```
####3.文件目录
3.1 src 源文件。src/main入口文件  src/packages 各个模块功能   
3.2 examples 开发例子   
3.3 dist 输出文件

