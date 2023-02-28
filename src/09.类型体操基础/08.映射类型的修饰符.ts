interface IPerson {
  name: string
  age: number
}
// 1.通过readonly和?可选操作符进行操作
type MapPerson<T> = {
  readonly [propsName in keyof T]?: T[propsName]
}
// 2.MapPerson<IPerson>返回类型中
const p1: MapPerson<IPerson> = {
  name: '张三',
}
// name和age是readonly且可选的
// p1.name = 111

export {}
