// 1.联合类型extends的时候会进行分发
type toArray<T> = T extends any ? T[] : never
type numberArr = toArray<number>
// type numberString = string[] | number[]
type numberString = toArray<number | string>

export {}
