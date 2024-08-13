import axios from 'axios';

// Replace with the actual backend URL
const URL = 'http://localhost:5000/api';

export const getKeys = async () => {
    return axios.get(`${URL}/keys`);
};

export const addKey = async (key: string, user: string) => {
    return axios.post(`${URL}/add`, { key, user });
};

export const removeKey = async (key: string) => {
    return axios.delete(`${URL}/remove/${key}`);
};
