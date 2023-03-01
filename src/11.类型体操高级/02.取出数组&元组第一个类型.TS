type First<T extends unknown[]> = T[0]
type arr = [1, 2, 3]
type arr2 = any[]
type FirstArr = First<arr>
type FirstArr2 = First<arr2>

export {}
