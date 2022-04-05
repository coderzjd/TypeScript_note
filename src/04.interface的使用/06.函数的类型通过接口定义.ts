const foo: () => void = () => {}
interface Ifoo {
  (): void
}
const bar: Ifoo = () => {}

type fooType = () => void
export {}
