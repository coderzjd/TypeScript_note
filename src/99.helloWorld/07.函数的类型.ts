const foo: () => void = () => {}

// interface定义
interface barInterface {
  (): void
}
const bar: barInterface = () => {}

// type定义
type barType = () => void
const bars: barType = () => {}
export {}
