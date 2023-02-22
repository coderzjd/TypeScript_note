class Person {
  name: string
  age: number
  // 属性“width”没有初始化表达式，且未在构造函数中明确赋值。
  width: number
  // !为非空断言（可能引发bug）
  height!: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(`${this.name} is eating`)
  }
}

const p = new Person('jd', 18)
p.eating()

export {}
