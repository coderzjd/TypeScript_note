interface ObjType {
  // 1.定义对象的索引签名: key为string类型,value为string类型
  [propName: string]: string
  // (此时对象的所有key和value必须都满足这个要求
  // 类型“number”的属性“name”不能赋给“string”索引类型“string”。
  // name: number
  age: string
}
function foo(a: ObjType) {
  console.log(a.age)
}
foo({ color: 'red', age: '100' })
// foo({ color: 'red', age: 100 })

// 2.定义数组类型的索引签名
interface IArray {
  [propName: number]: string | number
}
const i1: IArray = ['1', '2']
const i2: IArray = [1, 2]

// 3.通过数字类型访问索引时都是转化为string类型访问 
interface IObjeArr {
  [propsName: string]: any
}
const o1: IObjeArr = {
  name: '1',
}
const o2: IObjeArr = [1, 2]


interface IndexLange {
  [index: number]: string
}
// 相当于制定了对象的key和value的具体类型
// 用于统一类型的对象中
const webLangeuage: IndexLange = {
  0: 'CSS',
  1: 'HTML',
}

export {}
