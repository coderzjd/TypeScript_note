// Exclude<UnionType, ExcludedMembers>
// 用于从联合类型UnionType中排除ExcludedMembers类型

type Direction = 'left' | 'right' | 'up' | 'down'
type exType = 'up' | 'down'

type ExcludeType = Exclude<Direction, exType>

// 1.联合类型extends的时候会进行分发，返回值为never的时候会被移除掉
type MyExclude<U, E> = U extends E ? never : U

type myExcludeType = MyExclude<Direction, exType>

interface IPerson {
  name: string
  arg: number
  height: number
}
type KeysType = 'name' | 'height'

// 2.Exclude实现Omit
type myOmitType<O, U> = {
  [p in Exclude<keyof O, U>]: O[p]
}
type myOmitTypeIPerson = myOmitType<IPerson, KeysType>
export {}
