// 并且还会带有任意数量的其它属性，那么我们可以这样定义它：
interface ObjType {
  // 1.定义对象的key为string类型,value为any类型
  [propName: string]: any

  // 2.类型“string | undefined”的属性“name”不能赋给“string”索引类型“string”
  // [propName: string]: string
  // name?: string
  // age?: number
}
function foo(a: ObjType) {
  console.log(a.age)
}
let methodTwo = foo({ color: 'red', age: 100 })
