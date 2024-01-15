import HttpService from "../../repository/http.service";

class AuthService extends HttpService{
    registerProcess = async (data) =>{
        try{
            let response = await this.postRequest("/v1/register", data, {file:true})
        }catch(err){
            throw err;
        }
    }
}

const authSvc = new AuthService;
export default authSvc