// 当一个变量无法确定类型，并且数据类型可能改变时使用
// 1.进行类型断言的转化
// 2.懒得添加数据类型，就是原生js类型
let msg: any = null
msg = 11
msg = '11'
console.log(msg)
// 不太安全
msg.name
// 表示数组可以存入任何类型
const arr: any[] = [1, 'str', true]
export {}
