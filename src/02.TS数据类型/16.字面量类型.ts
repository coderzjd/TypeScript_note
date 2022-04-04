// 字面量类型必须结合联合类型使用
type Direction = 'left' | 'right' | 'center'
let align: 'left' | 'right' | 'center' = 'left'
align = 'center'

let alignA: Direction
alignA = 'right'
export {}
