function runFoo(fn: Ifoo) {
  fn.foo()
}
interface Ifoo {
  foo: () => void
}
interface Ikk {
  ikk: () => void
}
class Person {}
// 一个类只可以继承一个父类，但是可以实现多个接口
// 实现了接口必须有对应的实现体
class Student extends Person implements Ifoo, Ikk {
  foo() {}
  ikk() {}
}
const s1 = new Student()

runFoo(s1)
runFoo({ foo: () => {} })

export {}
