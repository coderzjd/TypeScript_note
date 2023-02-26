// 1.通过泛型指定promise中res的类型
const p1 = new Promise<string>((res, rej) => {
  res('1')
})
p1.then((res) => {
  console.log(res)
})
// 2.函数通过泛型指定类型
function foo<T>(res: T): Promise<T> {
  return Promise.resolve(res)
}
foo<string>('1').then((res) => console.log(res))

// 3.async 和 await 的使用
interface IDate<T> {
  data: T
  total: number
}
async function bar() {
  const request: IDate<number[]> = {
    data: [1, 2],
    total: 10,
  }
  const res = await foo<IDate<number[]>>(request)
  console.log(res.total)
}

export {}
