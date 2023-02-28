interface IPerson {
  name: string
  age: number
}
// 1.Partial将类型上的属性都转化为可选属性
type PersonPartial = Partial<IPerson>
// 2.自定义MyPartial实现
type MyPartial<T> = {
  [propsName in keyof T]?: T[propsName]
}
type myPersonPartial = MyPartial<IPerson>
export {}
