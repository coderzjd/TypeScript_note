type barType = (n1: string, n2: string) => string

function foo(n1: number, n2: number): number {
  return n1 + n2
}
type barReturnType = ReturnType<barType>
type fooReturnType = ReturnType<typeof foo>
// 1.推断函数返回值类型
// infer推断返回值类型为R，推断出来则为R
type MyReturnType<T extends (...arg: any[]) => any> = T extends (
  ...arg: any[]
) => infer R
  ? R
  : never

type myBarReturnType = MyReturnType<barType>
type myFooReturnType = MyReturnType<typeof foo>

// 2.推断函数参数类型
type MyParamsType<T extends (...agr: any[]) => any> = T extends (
  ...arg: infer A
) => any
  ? A
  : never

type myBarParams = MyParamsType<barType>
type myfooParams = MyParamsType<typeof foo>

export {}
