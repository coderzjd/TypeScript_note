type Equal<T, K> = (<U>() => U extends T ? 1 : 2) extends <O>() => O extends K
  ? 1
  : 2
  ? true
  : false

// 1.此处将 【 (<U>() => U extends T ? 1 : 2) 】 和【 (<O>() => O extends T ? 1 : 2) 】看做两个类型
// 2.两个类型相等则相等为true，否则为false
// 3.在类型中定义函数解析
// 4.https://juejin.cn/post/7116555790495776781
type flag1 = Equal<string, number>
type a = {}
type b = { a: 'a' }
type A = a extends b ? true : false
type B = b extends a ? true : false

type flag2 = Equal<a, b>

export { Equal }
