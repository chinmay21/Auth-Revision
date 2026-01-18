import axios from 'axios'

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {

    const token = JSON.parse(localStorage.getItem("token")) || null;
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: {
            Authorization: token ? `Bearer ${token}` : "", 
            ...headers,
        },
        params: params ? params : null
    });
}