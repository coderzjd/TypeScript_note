function getValue<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}
const obj = {
  name: '张三',
  age: 18,
  height: 170,
}
getValue(obj, 'name')

// 1.访问obj对象上不存在的key就会报错
// getValue(obj, 'width')
interface IObj {
  name: string
  age: number
  height: number
}
// 2.此时 ObjType 类型相当于 'name'|'age'|'height'的联合类型
type ObjType = keyof IObj

export {}
