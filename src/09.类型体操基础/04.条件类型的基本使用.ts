type IDtype = number | string
type resType = number extends IDtype ? true : false
type resType1 = boolean extends IDtype ? true : false

function foo<T extends number | string>(n1: T, n2: T): T extends string ? string : number
function foo(n1, n2) {
  return n1 + n2
}
const res = foo<string>('20', '30')
const res2 = foo<number>(10, 20)
export {}
