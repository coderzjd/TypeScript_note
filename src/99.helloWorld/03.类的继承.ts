class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  run() {
    console.log(`${this.name} 在跑步`)
  }
}
class Sty extends Person {
  Sno: number
  constructor(name: string, Sno: number) {
    // 通过super关键字调用父类的构造函数
    super(name)
    this.Sno = Sno
  }
  studying() {
    console.log('学生在学习')
  }
}
class Teacher extends Person {
  Tno: number
  constructor(name: string, Tno: number) {
    super(name)
    this.Tno = Tno
  }
  teaching() {
    console.log(`${this.name} 在上课`)
  }
}

const t1 = new Teacher('zz', 18)
console.log(t1.name, t1.Tno)
t1.run()
t1.teaching()

export {}
