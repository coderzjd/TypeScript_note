interface Info {
  name: string
}
const obj = {
  name: 'zz',
  age: 18,
}
// 1.这里是新鲜的操作是需要严格类型检测的
// 2.直接赋值是新鲜的不行的，
// const info: Info = {
//   name: 'zz',
//   age: 18,
// }
// 3.obj先定义赋值后就不是新鲜的了，可以赋值
const info2: Info = obj
// 4.操作后，TS定义域内没有age属性，无法使用
// console.log(info2.age)
// 5.打印任然存在
console.log(info2) 

export {}
