type Length<T extends unknown[]> = T['length']
type arr = [1, 2, 3]
type arr2 = any[]

type newArr = Length<arr>
type newArr1 = Length<arr2>

export {}
