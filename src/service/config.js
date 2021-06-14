import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:7888/coffee/api/coffee/'
})