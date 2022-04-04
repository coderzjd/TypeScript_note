// 函数的重载
// 1.函数名称相同，函数的个数和类型不同
function add(num1: number, num2: number): number
function add(num1: string, num2: string): string

function add(num1: any, num2: any): any {
  // 函数的具体实现
  return num1 + num2
}
const res = add('1', '2')
const res1 = add(1, 2)
// 2.函数重载时只有匹配的类型的函数会被执行，原本的函数体不会被直接执行
// const res2 = add([1], [2])

export {}
