import babel from 'rollup-plugin-babel'// 转化es6
import commonjs from 'rollup-plugin-commonjs'// 支持commonjs包
import resolve from 'rollup-plugin-node-resolve' // 支持第三方包
import builtins from 'rollup-plugin-node-builtins' // 支持node内置模块
import json from 'rollup-plugin-json';
import { uglify } from "rollup-plugin-uglify"// 压缩代码
import { eslint } from 'rollup-plugin-eslint'// 代码审查

let isProd = process.env.NODE_ENV === 'production'
// 通用的插件
const basePlugins = [
    babel({
      exclude: [/\/core-js\//, 'node_modules/**'], // 只编译我们的源代码
      runtimeHelpers: true
    }),
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
const devPlugins = []
// 生产环境需要使用的插件
const prodPlugins = [uglify()]
let plugins = [...basePlugins].concat(isProd ? prodPlugins:devPlugins)
let destFilePath = isProd ? './dist/dist.min.js': './dist/dist.js'

export default {
  input: 'src/main',
  output: {
    file: destFilePath,
    format: 'umd', // 模块类型
    name: 'wankaUtil',
    sourceMap: isProd
  },
  external: [],// 无需打包的第三方包
  plugins: plugins
};