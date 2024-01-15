import { NavLink } from "react-router-dom"
import RegisterComponent from "../../components/auth/RegisterComponent";
import axios from "axios";
import axiosInstance from "../../repository/axios.config";
import authSvc from "./auth.service";
const RegisterPage = () => {
    const registerSubmit = async (data) =>{
        
        try{
            data.role = data.role.value;
            console.log(data);
            const response = await authSvc.registerProcess(data);
            console.log("this is response", response);
        }catch(err){
            console.log("this is errors", err)
        }
    }
  return (
    <>
    
    <div className="mainWrapper">
        <div className="container">
            <div className="row">
                <div className="col col-sm-12">
                    <RegisterComponent registerSubmit={registerSubmit}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterPage;