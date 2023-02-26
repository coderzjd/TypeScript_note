// 使用第三方的包时需要声明文件
// 社区查找地址
// https://www.typescriptlang.org/dt/search?search=lodash
// .d.ts文件用于对ts的类型进行声明
// 1.声明模块
declare module 'lodash' {
  export function foo(): void
}
// 2.声明变量，函数，类
declare let myName: string
declare let myAge: number

declare function foo(): void

declare class Person {
  name: string
  constructor(name: string)
}
// 3.声明文件,是一个模块
declare module '*.jpg'
declare module '*.png'
declare module '*.txt'

// 4.声明命名空间$
declare namespace $ {
  export function foo(): void
}
