type concat<T extends unknown[], K> = K extends unknown[]
  ? [...T, ...K]
  : [...T, K]
type arr = [1, 2, 3]
type item = 4
type arr1 = [5, 6, 7]
type newArr = concat<arr, item>
type newArr1 = concat<arr, arr1>

export {}
