import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const ForgotComponent = () => {
  return (
    <>
    <div className="mainWrapper">
        <div className="container">
            <div className="row">
                <div className="col col-sm-12">
                    <Form action="" className="forgot_form text-center mt-4 mb-4">
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

export default ForgotComponent