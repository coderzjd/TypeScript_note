// 字面量类型必须结合联合类型使用
type Direction = 'left' | 'right' | 'center'
let align: 'left' | 'right' | 'center' = 'left'
align = 'center'

let alignA: Direction
alignA = 'right'

// 此时18是一种数据类型
let age: 18 = 18
// 不能将类型“19”分配给类型“18”
// age = 19
console.log(typeof age)

export {}
