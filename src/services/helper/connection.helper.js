import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://127.0.0.1:3000/api',
    timeout: 2000,
  });