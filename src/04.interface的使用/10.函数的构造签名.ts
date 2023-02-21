class Person {}
interface IPersion {
  new (): Person
}
// 构造签名表示当前fn为返回Persion类型的构造函数
function foo(fn: IPersion) {
  const p = new fn()
  return p
}
export {}
