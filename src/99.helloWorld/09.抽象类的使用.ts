function getName(p: Person) {
  p.run()
}
// 1.抽象类必须写在抽象方法中
// 2.抽象类无法创建实例
// 3.抽象类的子类必须实现父抽象类的方法
abstract class Person {
  abstract run(): void
}
class Man extends Person {
  run() {
    console.log('Man runing')
  }
}
class Woman extends Person {
  run() {
    console.log('Woman runing')
  }
}
// 抽象类无法创建实例
// const p1 = new Person()
const m1 = new Man()
getName(m1)
const w1 = new Woman()
getName(w1)

export {}
