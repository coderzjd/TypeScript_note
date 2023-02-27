type IDtype = number | string
type resType = number extends IDtype ? true : false

function foo<T extends number | string>(
  n1: T,
  n2: T
): T extends string ? string : number {
  return n1 + n2
}
const res = foo<string>('20', '30')
const res2 = foo<number>(10, 20)
export {}
