function logMsg(msg?: string): void {
  // 此时编译不报错，但是不严谨
  // 非空类型断言，msg必定有值
  // console.log(msg!.length)

  // JS可选链，相对严谨
  // 不存在直接返回undefined
  console.log(msg?.length)
}
logMsg()
logMsg('22')

// const imgEl: HTMLImageElement | null
// const imgEl = document.querySelector('img')
// console.log(imgEl?.src);
// console.log(imgEl!.src);

// 非空类型断言用于赋值，可选链路用于取值
interface Person {
  name: string
  age: number
  firend?: {
    name: string
  }
}
const p1: Person = {
  name: '张三',
  age: 18,
}

p1.firend!.name = '李四'
// 赋值表达式的左侧不能是可选属性访问。
// p1.firend?.name = '李四'

export {}
