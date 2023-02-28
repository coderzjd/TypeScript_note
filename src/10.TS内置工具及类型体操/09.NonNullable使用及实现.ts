// NonNullable<Type>
// 用于从联合类型Type中删除null和undefined

type UnType1 = 'a' | 'b' | 'c' | null | undefined

type T0 = NonNullable<UnType1>

type MyNonNullable<U> = U extends null | undefined ? never : U

type T1 = MyNonNullable<UnType1>

type MyNonNullable2<U> = Exclude<U, null | undefined>

type T2 = MyNonNullable2<UnType1>

export {}
