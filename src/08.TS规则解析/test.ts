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

export {}
