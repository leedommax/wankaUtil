// import babel from 'rollup-plugin-babel'// 转化es6
import commonjs from 'rollup-plugin-commonjs'// 支持commonjs包
import resolve from 'rollup-plugin-node-resolve' // 支持第三方包
import builtins from 'rollup-plugin-node-builtins' // 支持node内置模块
import json from 'rollup-plugin-json';
import { uglify } from "rollup-plugin-uglify"// 压缩代码
import { eslint } from 'rollup-plugin-eslint'// 代码审查
import serve from'rollup-plugin-serve'
import buble from 'rollup-plugin-buble'

import path from 'path'
import pkg from './package.json'
const resolveFile = function(filePath) {
  return path.join(__dirname, './', filePath)
}
let isProd = process.env.NODE_ENV === 'production'
// 通用的插件
const basePlugins = [
		buble(),
    builtins(),
    resolve(),
    commonjs(),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    json()
  ]
// 开发环境需要使用的插件
const devPlugins = [    // 使用开发服务插件
    serve({
      port: 3001,
      // 设置 exmaple的访问目录和dist的访问目录
      contentBase: [resolveFile('examples'), resolveFile('dist')]
    })]
// 生产环境需要使用的插件
const prodPlugins = [uglify()]
let plugins = [...basePlugins].concat(isProd ? prodPlugins:devPlugins)
let destFilePath = isProd ? `./dist/${pkg.name}.min.js`: `./dist/${pkg.name}.js`

export default {
  input: resolveFile('src/main'),
  output: {
    file: resolveFile(destFilePath),
    format: 'umd', // 模块类型
    name: 'wankaUtil',
    sourceMap: isProd
  },
  external: [],// 无需打包的第三方包
  plugins: plugins
};