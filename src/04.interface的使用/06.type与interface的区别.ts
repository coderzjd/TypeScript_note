// 1.定义非对象类型推荐使用type
// 2.定义对象时优先使用interface定义
// 3.interface定义可以合并接口，与lib里面已经声明好的接口进行追加
interface Ifoo {
  name: string
}
interface Ifoo {
  age: number
}
const foo: Ifoo = {
  age: 12,
  name: '11',
}
// 定义type不允许名称相同
// type bar = { name: string }
// type bar = { age: number }

export {}
