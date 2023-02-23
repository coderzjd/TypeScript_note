interface Info {
  name: string
}
const obj = {
  name: 'zz',
  age: 18,
}
// const info: Info = {
//   name: 'zz',
//   age: 18,
// }
// 直接赋值是不行的，obj先定义后赋值可以
// 赋值的时候进行类型对比擦除了属性，变量上原属性依旧存在
// 多余属性的擦除
const info2: Info = obj
console.log(info2)
// 擦除操作后，没有age属性，无法使用
// console.log(info2.age)


type fnType = (num: number, num2: number) => number
function calc(fn: fnType) {
  const n1 = 10
  const n2 = 20
  fn(n1, n2)
}
calc((n1, n2) => n1 + n2)
// calc((n1) => n1):此时不对函数参数个数做校验
calc((n1) => n1)
export {}
