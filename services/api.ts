import axios from 'axios';

const api = axios.create({
  baseURL: 'https://acoeshoje.herokuapp.com/'
})

export default api