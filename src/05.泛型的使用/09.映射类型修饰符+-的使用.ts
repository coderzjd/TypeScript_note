interface IPerson {
  readonly name: string
  age?: number
}
// 1. - 或者 + 删除或者添加属性，默认是 +

// 2.通过-操作符将
// 只读属性(name)改为可写类型
// 可选类型(age)改为必选
type MapPerson<T> = {
  -readonly [propsName in keyof T]-?: T[propsName]
}
const p1: MapPerson<IPerson> = {
  name: '张三',
  age: 18,
}
p1.name = '李四'

export {}
