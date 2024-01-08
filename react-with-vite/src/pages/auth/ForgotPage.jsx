import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { toast } from "react-toastify"

const ForgotPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            toast.success("Login successfull");
        }catch(err){
            toast.error("Login Error");
        }
    }
  return (
    <>
    <div className="mainWrapper">
        <div className="container">
            <div className="row">
                <div className="col col-sm-12">
                    <Form onSubmit={handleSubmit} className="forgot_form text-center mt-4 mb-4">
                        <h1>Forget Password</h1>
                        <div className="custom_form mt-3">
                            <p>Please use the register email to reset the password.</p>
                            <input type="email" placeholder="Email Address" name="email" />
                            <div className="btn_wrap">
                                <input type="submit" value="Send" className="btn btn-success" />
                                <div className="redirect_link"><NavLink to={"/login"}>Login</NavLink></div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ForgotPage;