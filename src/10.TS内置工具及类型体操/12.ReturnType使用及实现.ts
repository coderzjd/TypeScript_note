// ReturnType<Type>
// 获取函数FunType的返回值类型
type FuncType = (arg: string) => string
type funcReturnType = ReturnType<FuncType>

type MyFuncType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer A ? A : never

type MyfuncReturnType = MyFuncType<FuncType>

export {}
