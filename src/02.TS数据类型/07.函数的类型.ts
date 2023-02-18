// 1.函数作为参数的类型
function foo() {}
function bar(fn: () => void) {
  fn()
}
bar(foo)
// 2.type 定义
type fooATypee = () => void
type barAType = (fn: fooATypee) => void

const fooA: fooATypee = () => {}
const barA: barAType = (fn: fooATypee) => {
  fn()
}
barA(() => {})
barA(fooA)

// 匿名函数的参数类型，自动根据上下文推导
const arr = [1, 2, 3]
arr.forEach((item, index, arr) => {})

// 指定函数中不确定参数个数时类型
function gpp(...arg: number[]) {
  console.log(arg)
}
gpp(1)
gpp(1, 2)
// gpp(1, '2')
export {}
