// ConstructorParameters<Type>
// 获取构造函数FunType的参数类型
type FuncType = new (arg: string) => string
type funcConstructorParamsType = ConstructorParameters<FuncType>

class Person {}
interface PersonNew {
  new (name: string): Person
}
type PersonConstructorParamsType = ConstructorParameters<PersonNew>

type MyConstructorParamsType<T extends new (...arg: any[]) => any> = T extends new (
  ...arg: infer A
) => any
  ? A
  : never

type MyFucConstructorParamsType = MyConstructorParamsType<FuncType>
type MyPersonConstructorParamsType = MyConstructorParamsType<PersonNew>

export {}
