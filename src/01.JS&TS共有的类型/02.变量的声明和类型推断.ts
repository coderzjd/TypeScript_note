// 1.小写的string是ts的数据类型
// 2.大写的String是js的类
const hello: string = 'hello'
const num: number = 11
const flag: boolean = true

// 会有自动的类型推断可以省略类型

// 1.使用let声明推导是通用类型
// 2.使用const声明时字面量类型
let foo = '123'
const bar = '123'
// 不能将类型“number”分配给类型“string”
// foo = 111
// 无法分配到 "bar" ，因为它是常数
// bar = '123'
export {}
