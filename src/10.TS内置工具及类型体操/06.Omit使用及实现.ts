// Omit<Type, Keys>
// 用于构造一个类型，从Type类型中过滤掉存在Keys上的属性

interface IPerson {
  name: string
  arg: number
  height: number
}
type KeysType = 'name' | 'height'
type PersonOmit = Omit<IPerson, KeysType>

// 2.此时P是T的索引，且不存在K中
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
type myPersonOmit = MyOmit<IPerson, KeysType>
export {}
