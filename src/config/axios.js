import axios from 'axios';
import API_URL from './api';

axios.defaults.baseURL = API_URL;

const token = localStorage.getItem('auth_token');

if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axios;