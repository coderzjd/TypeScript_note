function foo(this: { name: string }, arg: string) {
  console.log(this.name)
  console.log(arg)
}
// 1.ThisParameterType获取函数this的类型
// FooType为foo函数的类型
type FooType = typeof foo

// FooThisType为foo函数中this的类型
type FooThisType = ThisParameterType<FooType>

function bar() {
  console.log()
}
// 2.如果没有指定则返回unknow
type BarThisType = ThisParameterType<typeof bar>

// 3.OmitThisParameter
// PureFooType 为foo函数类型移除this参数类型，并且返回函数类型
type PureFooType = OmitThisParameter<FooType>

// 4.ThisType:标记上下文中this的类型
interface IState {
  name: string
  age: number
}
interface IStore {
  state: IState
  getName: () => void
}
const store: IStore & ThisType<IState> = {
  state: {
    name: '张三',
    age: 18,
  },
  getName: function () {
    // 通过ThisType<IState>指定这里上下文的this类型
    // pinia的getter原理
    // https://pinia.vuejs.org/zh/core-concepts/getters.html
    return this.age
  },
}

export {}
