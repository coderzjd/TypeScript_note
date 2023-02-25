// 1.默认情况下可以允许模糊的this
function foo() {
  //   console.log(this.name)
}

// 2. "noImplicitThis": true,    //不允许模糊的this
function foo1() {
  //   console.log(this.firend.name)
}

// 3.不允许时会自动推导this
const obj = {
  firend: {
    name: '张三',
  },
  say() {
    // 此处this为自动推导
    console.log(this.firend.name)
  },
}
// 4.通过函数参数确定:具体this的类型
function bar(this: { name: string }, str: string) {
  console.log(str.length)
  console.log(this.name)
}
bar.apply({ name: '王五' }, ['1'])
// 此时对于函数调用时this就会判断
// 类型为“void”的 "this" 上下文不能分配给类型为“{ name: string; }”的方法的
// bar('李四')
// 类型 "{}" 中缺少属性 "name"，但类型 "{ name: string; }" 中需要该属性。
// bar.apply({}, ['1'])
export {}
