import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:80',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

// Fetch CSRF token - DELETE THIS LATER
instance.get('/sanctum/csrf-cookie').then(() => {
  console.log('CSRF token set');
}).catch(err => {
  console.error('Error fetching CSRF token:', err);
});

export default instance;