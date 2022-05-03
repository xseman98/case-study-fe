import axios from "axios";
import { config } from '@/config';

function checkResponse(res) {
    if (res.status < 304) {
        return res;
    } else if (res.status === 401) {
        alert("User is not logged in.")
        return Promise.reject({error: 401, message: "User is not logged in."})
    } else if (res.status === 403) {
        alert("Access denied.");
        return Promise.reject({error: 403, message: "Access denied."})
    } else if (res.status === 404) {
        alert("Object not found.")
        return Promise.reject({error: 404, message: "Object not found."});
    } else {
        alert("Server error.");
        return Promise.reject({error: res.status, message: "Server error"});
    }
}

//GET
export function get(uri, headers) {
    return getMethod(uri, headers)
        .then(checkResponse);
}

//DELETE
export function del(uri, headers) {
    return delMethod(uri, headers)
        .then(checkResponse);
}

//POST
export function post(uri, data, headers) {
    return postMethod(uri, data, headers)
        .then(checkResponse);
}

//PUT
export function put(uri, data, headers) {
    return putMethod(uri, data, headers)
        .then(checkResponse);
}

const URL = config.serverUrl;

function createAxiosInstance() {
    return axios.create({
        validateStatus: () => {
            return true; // Prevent axios from throwing Promise exception so it can be handled in index.js
        },
    });
}

async function getMethod(uri, headers) {
    const instance = createAxiosInstance();
    return instance.get(URL + uri, { headers: { ...headers } });
}

async function delMethod(uri, headers) {
    const instance = createAxiosInstance(headers);
    return instance.delete(URL + uri, { headers: { ...headers } });
}

async function postMethod(uri, data, headers) {
    const instance = createAxiosInstance(headers);
    return instance.post(URL + uri, data, { headers: { ...headers } });
}

async function putMethod(uri, data, headers) {
    const instance = createAxiosInstance(headers);
    return instance.put(URL + uri, data, { headers: { ...headers } });
}