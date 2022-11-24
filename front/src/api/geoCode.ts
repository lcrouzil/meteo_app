import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ?? 'http://10.3.2.54:8080/';

export const geoCode = (search: string) => {
    return axios.get(`${API_URL}/api/geoCode`, {
        params: {
            search: search,
        },
    });
};
