import axios from "axios";

export default async function callApi(url: any, method: any, params: any) {
    let headers = {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json; charset=utf-8',
        device: 'MOBILE',
    };
    let options = {
        headers,
        method,
        url,
        params,
        timeout: 15 * 1000
    };
    return axios(options);
};