type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k
}

type arr = ['张三', '李四', '王五']
type newArr = TupleToObject<arr>
export {}
