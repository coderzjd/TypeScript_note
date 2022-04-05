// 1.类型参数化
// 2.在定义函数时不指定参数和返回值的类型
// 3.在函数调用时，让调用者以参数的形式传递过来
function foo<Type>(a: Type): Type {
  return a
}
// 1.调用是明确传入类型
const res1 = foo<number>(1)
const res2 = foo<any[]>([1])
const res3 = foo<string>('1')
// 2.类型推导
const res4 = foo(20)
export {}
