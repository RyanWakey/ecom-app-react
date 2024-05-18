import axios from 'axios';

const axiosInstance = axios.create({
    // I need to change this
  baseURL: 'http:///0.0.0.0:80/api',
  withCredentials: true,
});

export default axiosInstance;