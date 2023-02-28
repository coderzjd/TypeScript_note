// InstanceType<Type>
// 获取构造函数Type返回值的类型
class Person {}

const p1 = new Person()
// 1.typeof 返回的是构造函数的类型
// 2.InstanceType<typeof Person>返回构造函数实例的类型
type personInstanceType = InstanceType<typeof Person>

type MyInstanceType<T extends new (...arg: any[]) => any> = T extends new (...arg: any[]) => infer A
  ? A
  : never

type MypersonInstanceType = MyInstanceType<typeof Person>

// 3.使用场景，工厂函数接收构造函数返回具体实例类型
function foo<T extends new (...arg: any[]) => any>(fn: T): InstanceType<T> {
  return new fn()
}
class Car {}
class Dog {}
interface CarI {
  new (): Car
}
const c1 = foo<CarI>(Car)
const d1 = foo(Dog)

export {}
