import request from '../index'
interface IData {
  data: any
  total: number
}
request
  .request<IData>({
    url: '222',
  })
  .then((res) => console.log(res))
