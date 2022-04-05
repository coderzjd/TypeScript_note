class Person {
  // static修饰的属性和方法通过类名直接访问
  static region = 'China'
  static run() {
    console.log('runing')
  }
  name: string
  constructor(name: string) {
    this.name = name
  }
}
const p1 = new Person('11')
console.log(p1.name)
console.log(Person.region)
Person.run()

export {}
