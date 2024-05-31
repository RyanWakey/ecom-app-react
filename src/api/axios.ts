import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:80',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// Fetch CSRF token
instance.get('/sanctum/csrf-cookie').then(() => {
  // CSRF token is now set and will be included in all subsequent requests
});


export default instance;