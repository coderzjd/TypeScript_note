type toArray<T> = T extends any ? T[] : never
type numberArr = toArray<number>
type numberString = toArray<number | string>

export {}
