import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
