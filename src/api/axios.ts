import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 'http://localhost:80'
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export const initializeAxios = async () => {
  await instance.get('/sanctum/csrf-cookie');
};

export default instance;