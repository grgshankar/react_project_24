import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="mainWrapper">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12">
              <Form
                onSubmit={handleSubmit(loginSubmit)}
                className="register_form text-center mt-4 mb-4"
              >
                <h1>Login</h1>
                <div className="custom_form mt-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email? <em className="text-danger text-start d-flex mb-2">Email is required</em> : ""}
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password? <em className="text-danger text-start d-flex mb-2">Password is required</em> : ""}
                  <div className="btn_wrap">
                    <div className="forget_row d-flex justify-content-between mt-2 mb-3">
                      <div className="left_side d-flex justify-content-center">
                        <input
                          type="checkbox"
                          name="remember"
                          style={{
                            width: "20px",
                            marginBottom: "0px",
                            marginRight: "5px",
                          }}
                        />{" "}
                        Remember Me
                      </div>
                      <div className="right_side redirect_link">
                        <NavLink to={"/forget"}>Forget Password</NavLink>
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-success"
                    />
                    <div className="redirect_link">
                      <NavLink to={"/register"}>Register</NavLink>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
