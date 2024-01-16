import axios from "axios";
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server Timed out...",
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json"
    },
})

// use() accept two parameters
axiosInstance.interceptors.response.use(
    // first parameter
    (response) =>{
        return response.data;
    },
    // second parameter
    (error) =>{
        // error handling
        // 400 , 422 this error comes from the form validations
        // 401, 403, 404 these are the general issue
        throw error.response.data;
    }
)
export default axiosInstance;