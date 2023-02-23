// 1.对于第三方库文件的接口进行拓展
interface Ifoo {
  foo: () => void
}
interface Ikk {
  ikk: () => void
}

interface Ill extends Ifoo, Ikk {
  kkk: () => void
}
function runFoo(fn: Ill) {
  fn.foo()
  fn.ikk()
  fn.kkk()
}

export {}
