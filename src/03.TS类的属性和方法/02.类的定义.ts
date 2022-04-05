class Person {
  name: string
  age: number
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
