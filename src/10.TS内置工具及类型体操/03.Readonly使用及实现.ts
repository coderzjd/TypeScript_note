interface IPerson {
  name: string
  age: number
}
// 1.Readonly将类型上的属性都转化为只读属性
type PersonReadonly = Readonly<IPerson>
// 2.自定义MyPartial实现
type MyReadonly<T> = {
  readonly [propsName in keyof T]: T[propsName]
}
type myPersonReadonly = MyReadonly<IPerson>
export {}
