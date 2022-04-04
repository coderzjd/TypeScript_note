// never 类型
// 函数死循环或者抛出异常时使用
function foo(): never {
  while (true) {}
}
function bar(): never {
  throw new Error('aa')
}
// 边界场景使用never
export {}
