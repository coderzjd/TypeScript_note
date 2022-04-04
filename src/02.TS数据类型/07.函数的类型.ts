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

export {}
