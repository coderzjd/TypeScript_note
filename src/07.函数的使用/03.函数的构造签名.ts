class Person {}
interface IPersion {
  new (): Person
}
// 1.构造签名表示当前fn为返回Persion类型的构造函数
function foo(fn: IPersion) {
  const p = new fn()
  return p
}
// 2.构造函数的简写
// new () => void
function bar(fn: new () => void) {}
bar(Person)
export {}
