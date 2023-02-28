// Record<Keys,Type>
// 用于构造对象类型，对象的所有key都是Keys类型,所有的value都是Type类型
type ValueKeys = 'age' | 'height'
type ValueType = string

type valueRecord = Record<ValueKeys, ValueType>

type MyRecord<K extends keyof any, T> = {
  // 1.in操作符的是联合类型
  // 2.需要确保K类型是联合类型(K extends keyof any):在any类型中number，string，Symble可以作为可以key
  [p in K]: T
}
type valueMyRecord = MyRecord<ValueKeys, ValueType>
export {}
