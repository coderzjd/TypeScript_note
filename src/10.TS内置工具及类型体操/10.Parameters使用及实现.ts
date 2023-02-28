// Parameters<FunType>
// 获取函数FunType的参数类型
type FuncType = (arg: string) => string
type funcParamsType = Parameters<FuncType>

type MyParamsType<T extends (...arg: any[]) => any> = T extends (...arg: infer A) => any ? A : never

type MyFucParamsType = MyParamsType<FuncType>
export {}
