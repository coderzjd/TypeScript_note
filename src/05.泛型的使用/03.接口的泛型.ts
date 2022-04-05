// 设置泛型的默认类型
interface Iinfo<T = string, S = number> {
  name: T
  age: S
}
const info: Iinfo<string, number> = {
  name: '11',
  age: 8,
}
const info1: Iinfo = {
  name: '11',
  age: 8,
}
export {}
