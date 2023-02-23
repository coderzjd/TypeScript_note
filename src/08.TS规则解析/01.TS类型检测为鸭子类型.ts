// TS类型检测弱类型和JAVA不一样
// 图灵测试
// 如果一个事物看起来像A,闻起来像A,摸起来像A,那么这个事物就是A类型
class Person {
  constructor(public name: string, public age: number) {}
}
class Dog {
  constructor(public name: string, public age: number) {}
}
function foo(p: Person) {
  console.log(p.name)
  console.log(p.age)
}

const p: Person = new Dog('小黑', 1)
foo(new Person('张三', 18))
foo(new Dog('点点', 2))
foo({ name: '王五', age: 20 })

export {}
