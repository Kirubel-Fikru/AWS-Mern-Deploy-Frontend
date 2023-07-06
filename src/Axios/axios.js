import axios from "axios"
const instance = axios.create({
  baseURL: "http://ip-172-31-87-92.ec2.internal:8000/api",
})
export default instance
//test  k