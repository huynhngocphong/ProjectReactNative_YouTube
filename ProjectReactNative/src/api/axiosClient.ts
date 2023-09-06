import axios, { HttpStatusCode } from "axios";
import { getLocalData, LocalStorageKey, storeLocalObjectData } from "../localStorage/LocalStorage";

const REACT_APP_BASE_URL = "https://youtube.googleapis.com/youtube/v3/"

const axiosClient = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: {
        'content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(async (config: any) => {
    await getLocalData(LocalStorageKey.KEY_ACCESS_TOKEN).then(value => {
        if (value != null) {
            config.headers = config.headers ?? {}
            config.headers = {
                'Authorization': `Bearer ${value}`,
                'content-type': 'application/json',
            }
        }
    })
    return config;
}, function (error) {
    return Promise.reject(error)
})

axiosClient.interceptors.response.use((response) => {
    console.log(response.request)
    return response
}, (error) => {
    console.log(error.response.data.message)
    // Handle errors
    switch (error.response.status) {
        case HttpStatusCode.BadRequest:
            console.log(error.response.data.message)
        case HttpStatusCode.InternalServerError:
            break
        case HttpStatusCode.Forbidden:
            break
        default: break
    }
    throw error.response.data.message
});

export default axiosClient;
