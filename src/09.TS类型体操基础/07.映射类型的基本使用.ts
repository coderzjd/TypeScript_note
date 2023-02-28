// 1.映射类型只能使用type定义
interface IPerson {
  name: string
  age: number
}
// 2.TPerson类型实现了对T类型的拷贝
type MapPerson<T> = {
  // 3.通过索引签名进行遍历创建类型
  [propsName in keyof T]: T[propsName]
  // 4.映射的类型可能不声明属性或方法。
  // height: number
}

const p1: MapPerson<IPerson> = {
  name: '张三',
  age: 18,
}

export {}
