// 1.js里面的.操作符可以理解为['']取值操作
// const arr: any[] = [1, 2]
// console.log(arr['map'])

interface IType {
  [propsName: string]: any
}
interface IType2 {
  [propsName: string]: number
}

const arr: IType = [1, 2, 3]
// 2.不能将类型“number[]”分配给类型“IType2”。
// 是因为
// arr2['map'] 返回值实际为函数类型和number类型不兼容
// const arr2: IType2 = [1, 2, 3]

// 3.以下写法类似于函数的重载
interface TDoubleType {
  // 数组索引的类型必须是字符串索引类型的子类型
  // number是any的子类型
  // 是因为：通过数字类型访问索引时都是转化为string类型访问 ，不能互相矛盾
  [propsName: number]: number
  [propsName: string]: any
}

const double: TDoubleType = [1, 2, 3]
// d1使用数字0作为索引，取值为number类型
const d1 = double[0]
// d2使用字符串map作为索引，取值为any类型
const d2 = double['map']
export {}
