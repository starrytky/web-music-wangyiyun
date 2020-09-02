/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-01 18:56:46
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-01 19:00:09
 */
const path = require('path');

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    }
  }
}