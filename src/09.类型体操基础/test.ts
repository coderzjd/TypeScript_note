interface IPerson {
  name: string
  age: number
}
type PersonPartial = Partial<IPerson>

type MyPartial<T> = {
  [propsName in keyof T]?: T[propsName]
}
type myPersonPartial = MyPartial<IPerson>
export {}
