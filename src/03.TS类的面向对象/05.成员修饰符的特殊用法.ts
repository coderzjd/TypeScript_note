class Person {
  public name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
const p1 = new Person('张三', 18)
p1.name

class Car {
  // 以上两种方法等价
  constructor(public name: string, private age: number) {}
}
const c1 = new Car('GTR', 9)
c1.name

export {}
