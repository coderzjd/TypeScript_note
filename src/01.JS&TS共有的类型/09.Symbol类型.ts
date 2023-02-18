const title1 = Symbol('title')
const title2 = Symbol('title')
const info = {
  [title1]: 'coder',
  [title2]: 'human',
  title: 'aaa',
}
const info2 = {
  [Symbol('title')]: 1,
  [Symbol('title')]: 2,
}
console.log(info2);

export {}
