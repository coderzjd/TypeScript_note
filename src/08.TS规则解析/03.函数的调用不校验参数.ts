type fnType = (num: number, num2: number) => number
function calc(fn: fnType) {
  const n1 = 10
  const n2 = 20
  fn(n1, n2)
}
calc((n1, n2) => n1 + n2)
// calc((n1) => n1):此时不对函数参数个数做校验
calc((n1) => n1)
export {}
