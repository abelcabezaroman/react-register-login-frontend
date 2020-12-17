import axios from 'axios';
import { getCookieUtil } from "../utils/getCookieUtil";

export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString () {
            return `Bearer ${getCookieUtil('token')}`
        }
    }
};

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 6000,
    headers: APIHeaders
});
