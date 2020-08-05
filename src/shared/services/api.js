import axios from 'axios';

export default axios.create({
    baseURL: process.env.URL,
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});
