import { NavLink } from "react-router-dom"
import RegisterComponent from "../../components/auth/RegisterComponent";
import axios from "axios";
const RegisterPage = () => {
    const registerSubmit = async (data) =>{
        
        try{
            data.role = data.role.value;
            console.log(data);
            const response = await axios.post("https://a4b8c667-bbe6-4271-b6e9-331764d25441-00-1chv3l0oebxil.worf.replit.dev/api/v1", data, {
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            });
            console.log(response);
        }catch(err){
            console.log(err)
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