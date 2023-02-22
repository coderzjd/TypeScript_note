const foo: () => void = () => {}
interface Ifoo {
  name: string
  // 函数的调用签名
  (n1: number, n2: number): void
}
const bar: Ifoo = (n1, n2) => {}
bar.name = 'bar'
// bar.age= 18
bar(1, 2)

type fooType = () => void
export {}
