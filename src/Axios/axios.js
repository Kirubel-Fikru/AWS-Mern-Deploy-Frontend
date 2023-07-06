import axios from "axios"
const instance = axios.create({
  baseURL: "http://172.31.87.92:8000/api",
})
export default instance
//test  k