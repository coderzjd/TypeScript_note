export interface IName {
  firstName: string
  lastName: string
}
export function getName(p: IName) {
  return p.firstName + p.lastName
}
