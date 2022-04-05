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
export {}
