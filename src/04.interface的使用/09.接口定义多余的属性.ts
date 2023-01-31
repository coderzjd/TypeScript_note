// 如果 ObjectType带有上面定义的类型的name和age属性，
// 并且还会带有任意数量的其它属性，那么我们可以这样定义它：
interface ObjType {
  name?: string
  age?: number
  [propName: string]: any
}
function foo(a: ObjType) {
  console.log(a.age)
}
let methodTwo = foo({ color: 'red', age: 100 })
