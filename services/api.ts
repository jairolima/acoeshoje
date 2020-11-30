import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.207.209.129:3335/'
})

export default api