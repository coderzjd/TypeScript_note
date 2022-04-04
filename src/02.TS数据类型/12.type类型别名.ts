// type 类型别名
type IDType = string | number

// 下面这两个是等价的
// let id: IDType
// let id: string | number

function foo(id: IDType): void {
  console.log(id)
}
export {}
