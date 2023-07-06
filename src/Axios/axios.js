import axios from "axios"
const instance = axios.create({
  baseURL: "http://ec2-3-86-36-216.compute-1.amazonaws.com:8000/api",
})
export default instance
//test  k