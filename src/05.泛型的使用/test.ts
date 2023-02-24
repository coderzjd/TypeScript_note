// https://juejin.cn/post/6906007507531038727
function useState<T>(initState: T): [state: T, setState: (state: T) => void] {
  let state = initState
  function setState(newState: T) {
    state = newState
  }
  return [state, setState]
}
const [count, setCount] = useState(100)
console.log(count)
setCount(200)
console.log(count)
export {}
