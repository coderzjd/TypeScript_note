type t1 = `${number}+${number}`
// const info: t1 = `true+1`
const info2: t1 = `1+1`
// TypeScript 把好几套 JS 语法原样搬进类型世界，但重新赋予编译期语义。
// 借用了同样的语法，给类型世界新增了一条“模式描述指令”。
// 详见类型穿越
export {}