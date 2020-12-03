import axios from 'axios';

const api = axios.create({
  baseURL: 'https://acoeshoje.herokuapp.com/b3'
})

export default api