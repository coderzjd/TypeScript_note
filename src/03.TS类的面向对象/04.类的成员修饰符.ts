// 属性修饰符
// 1.public：默认值。 在任何地方可见，共有的属性或者方法，
// 2.private ：私有的属性或者方法，仅在自身类中可见，new的实例及子类中无法访问。
// 3.protected :受保护的属性或者方法。修饰的仅在类自身及子类中可见，
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  private run() {
    console.log('runing')
  }
  protected song() {
    console.log('song')
  }
}
class Student extends Person {
  name!: string
  Sno: number
  constructor(name: string, Sno: number) {
    super(name)
    this.Sno = Sno
  }
  studying() {
    console.log('studying')
  }
}
const p1 = new Person('z')
const s1 = new Student('jd', 11)

export {}
