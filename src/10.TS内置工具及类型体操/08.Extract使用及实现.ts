// Extract<Type, Union>
// 用于从联合类型Type提取存在Union中的类型

type UnType1 = 'a' | 'b' | 'c'
type UnType2 = 'c' | 'f'

type T0 = Extract<UnType1, UnType2>

type MyExtract<U, T> = U extends T ? U : never

type T1 = MyExtract<UnType1, UnType2>
export {}
