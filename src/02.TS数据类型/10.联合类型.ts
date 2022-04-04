// 联合类型
function printID(id: number | string): void {
  console.log(id)
  if (typeof id === 'string') {
    // 此时类型断言会根据上下文直接推断类型 narrow
    console.log(id.length)
  }
}
printID(5)
export {}
