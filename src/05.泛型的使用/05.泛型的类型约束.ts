interface Ilength {
  length: number
}
// 将传入的T约束为Ilength 的子类型,必须包含length属性
function getLength<T extends Ilength>(arg: T) {
  // 类型“T”上不存在属性“length”。
  return arg.length
}
const res = getLength<string>('111')
const res1 = getLength<any[]>([1, 2, 3])
const res2 = getLength({ length: 10 })

export {}
