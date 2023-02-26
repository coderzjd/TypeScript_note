// 1.无法找到模块“lodash”的声明文件
import loadsh from 'lodash'
// 2.通过类型检测在lodash上添加了foo，但是foo并不存在
// console.log(loadsh.foo)
console.log(loadsh.join([1, 2, 3]))

