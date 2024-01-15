import axiosInstance from "./axios.config";

class HttpService {
    headers;
    getHeader = (config) =>{
        if(config && config.file){
            this.headers ={
                ...this.headers,
                "Content-Type":"multipart/form-data"
            }
        }
    }
    postRequest = async (url,data={}, config=null) =>{
        try{
            this.headers(config)
            let response = await axiosInstance.post(url, data, {
                headers: this.headers
            });
            return response;

        }catch(err){
            console.log("PostReq:", err)
            throw err;
        }
    }
}
export default HttpService;