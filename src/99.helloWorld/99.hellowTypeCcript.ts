// 直接定义，全部是any
function foo(num1, num2) {
  return num1 + num2
}
const fooRes = foo(1, 2)
// 指定函数参数的类型,和返回值的类型
// 返回值类型会自动推导
function bar(num1: number, num2: number): number {
  return num1 + num2
}
const barRes = bar(1, 2)
// 会自动限制参数的个数
// const barRes = bar(1)

// 可选参数
// 注：可选参数一定要放在必选参数之后
// 当参数有默认值的时候就是可选参数了
function bzz(num1: number = 10, num2?: number) {
  return num1 + num2
}
const bzzRes = bzz(1)

// 箭头函数参数类型定义(形参多写了一遍)
const akk: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
const akkRes = akk(1, 2)
export {}
