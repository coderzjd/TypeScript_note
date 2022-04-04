// tuple类型，元组类型，多种类型数据的组合。可以缺数组中指定位置的数据类型
const arr: any[] = ['jd', 11, true]
// 此时取值推断arr1的类型为any，不合理
const arr1 = arr[0]

const arrA: (string | number | boolean)[] = ['jd', 11, true]
// 赋值的变量是联合类型，不合理
const arrA1 = arrA[0]

// 定义元组类型,相对于数组的变种
const tup: [string, number, boolean] = ['jd', 11, false]
// 赋值的变量是指定的类型
const tup1 = tup[0]
const tup2 = tup[1]
export {}
