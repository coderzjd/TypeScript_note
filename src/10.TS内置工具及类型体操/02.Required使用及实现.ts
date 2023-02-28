interface IPerson {
  name?: string
  age: number
}
// 1.Required将类型上的可选属性都转化为必选属性
type PersonRequired = Required<IPerson>
// 2.自定义MyPartial实现
type MyRequired<T> = {
  [propsName in keyof T]-?: T[propsName]
}
type myPersonRequired = MyRequired<IPerson>
export {}
