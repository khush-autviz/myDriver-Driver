// lib/axios.js
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const instance = axios.create({
  timeout: 10000,
  withCredentials: true,
});

// Middleware-style import for Zustand (not reactive)
let token = null;
const authStore = useAuthStore.getState();
token = authStore.token;

instance.interceptors.request.use((config) => {
  config.baseURL = 'http://localhost:3000'; // change this to your IP address

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
