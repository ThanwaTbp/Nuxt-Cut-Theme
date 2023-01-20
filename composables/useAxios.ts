import axios from 'axios'

export default () => {
  const http = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
    headers: useRequestHeaders(['cookie'])
  })
  return http
}