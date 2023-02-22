class Person {
  // 只读属性可以在构造器中进行赋值
  // readonly和const很像，修饰的数据本身无法被修改，但是修饰的是对象时可以被修改
  readonly name: string
  age: number
  readonly friend?: Person
  constructor(name: string, age?: number, friend?: Person) {
    this.name = name
    this.age = age
    this.friend = friend
  }
}

const p1 = new Person('aa', 11, new Person('bb', 11))
// readonly和const很像，修饰的数据本身无法被修改，但是修饰的是对象时可以被修改
// p1.name = 11
p1.friend.age = 11
export {}
