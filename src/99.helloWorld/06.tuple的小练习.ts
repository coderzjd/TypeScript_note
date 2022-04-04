function useState<T>(str: T): [T, () => void] {
  function foo() {}
  return [str, foo]
}
const [name, setName] = useState<string>('name')
const [age, setAge] = useState<number>(1)
export {}
