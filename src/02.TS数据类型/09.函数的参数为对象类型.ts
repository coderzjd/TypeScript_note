// 函数的参数为对象类型
function logPoint(piont: { x: number; y: number; z?: number }): void {
  console.log(piont.x)
}
logPoint({ x: 1, y: 2 })
logPoint({ x: 1, y: 2, z: 3 })
export {}
