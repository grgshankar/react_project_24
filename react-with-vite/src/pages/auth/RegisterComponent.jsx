import { NavLink } from "react-router-dom"

const RegisterComponent = () => {
  return (
    <>
    
    <div className="mainWrapper">
        <div className="container">
            <div className="row">
                <div className="col col-sm-12">
                    <form action="" className="register_form text-center mt-4 mb-4">
                        <h1>Register</h1>
                        <div className="custom_form mt-3">
                            <input type="text" placeholder="Full Name" name="fullname" />
                            <input type="text" placeholder="Address" name="Address" />
                            <input type="text" placeholder="Phone" name="phone" />
                            <input type="email" placeholder="Email Address" name="email" />
                            <input type="password" placeholder="Password" name="password" />
                            <div className="btn_wrap">
                                <input type="submit" value="Register" className="btn btn-success" />
                                <div className="redirect_link"><NavLink to={"/login"}>Login</NavLink></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterComponent