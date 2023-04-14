type f = {
  name: string
  age?: number
}
type b = f & {
  name: 'zhangsan'
}
const bbb: b = {
    name: 'zhangsan',
  }
const k = {
    name: 'wangwu'
} as const
type kk = f & typeof k

const k1: kk = {
    name: 'wangwu'
}
interface bb extends f {
  name: 'lisi'
}
const bbbb: bb = {
  name: 'lisi',
}
type addProp<T, K extends keyof any, V> = T & Record<K, V>
type extF = addProp<f, 'height', '90'>
const ff: extF = {
    name: '1',
    height: '90'
}
export {}
