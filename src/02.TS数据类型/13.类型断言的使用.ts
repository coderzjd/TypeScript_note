// 1.案例一
// 类型推导为 el: HTMLElement
// <img id='id/>
const el = document.getElementById('id') as HTMLImageElement
// 类型断言进行确定具体类型
el.src = '111'

// 案例二
class Person {}
class Stu extends Person {
  studying() {}
}
function foo(p: Person) {
  ;(p as Stu).studying()
}
const stu = new Stu()
foo(stu)

// 案例三
const msg: string = 'hello'
let num: number
// 将msg的类型改变后可以赋值，
num = msg as unknown as number
num = msg as any as number

export {}
