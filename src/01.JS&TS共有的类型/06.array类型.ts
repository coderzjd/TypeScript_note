// 在ts中数组存放的元素类型最好是固定的

// 不推荐的写法
const names: Array<number> = [1, 23]
// 推荐写法
const namesA: number[] = [1, 3]
const namesB: string[] = ['1', '3']
// 可以从后往前看，最外面是数组A，数组A的元素是数组B，数组B的元素是string
const aar: string[][] = [['1', '2'], ['1']]
export {}
