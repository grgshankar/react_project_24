import { NavLink } from "react-router-dom"
import RegisterComponent from "../../components/auth/RegisterComponent";

const RegisterPage = () => {
  return (
    <>
    
    <div className="mainWrapper">
        <div className="container">
            <div className="row">
                <div className="col col-sm-12">
                    <RegisterComponent />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterPage;