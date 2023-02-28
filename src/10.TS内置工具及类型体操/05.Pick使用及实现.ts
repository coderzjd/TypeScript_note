// Pick<Type, Keys>
// 用于构造一个类型，从Type类型中挑选 属性存在Keys上的属性

interface IPerson {
  name: string
  arg: number
  height: number
}
type KeysType = 'name' | 'height'
type PersonPick = Pick<IPerson, KeysType>

// 2.此时K必须是T的索引类型
type MyPick<T, K extends keyof T> = {
  [p in K]: T[p]
}
type myPersonPick = MyPick<IPerson, KeysType>
export {}
