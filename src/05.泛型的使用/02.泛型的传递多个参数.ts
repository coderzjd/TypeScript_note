function foo<T, E>(a: T, b: E): E {
  return b
}
const res = foo<number, string>(1, '2')
export {}
