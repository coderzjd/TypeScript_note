// 1.Awaited<Type>
// 推断出Type(Promise)类型的res类型
type t1 = Awaited<Promise<string>>
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T

type t2 = MyAwaited<Promise<string>>

export {}
