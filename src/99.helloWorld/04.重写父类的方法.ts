class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  run() {
    console.log(`${this.name} 在父类的方法中跑步`)
  }
}
class Sty extends Person {
  Sno: number
  constructor(name: string, Sno: number) {
    super(name)
    this.Sno = Sno
  }
  run() {
    // 通过super关键字调用父类的方法
    super.run()
    console.log(`${this.name} 在子类的方法中跑步`)
  }
  studying() {
    console.log('学生在学习')
  }
}
const s1 = new Sty('zz', 11)
s1.run()
export {}
