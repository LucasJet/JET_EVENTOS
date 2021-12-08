import axios from 'axios';

const token = localStorage.getItem('@JET:token');

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default api;
