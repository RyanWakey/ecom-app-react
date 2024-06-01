import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:80',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default instance;