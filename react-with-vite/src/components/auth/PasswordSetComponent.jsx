import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const PasswordSetComponent = ({submitEvent}) => {
  const yupScheme = Yup.object({
    password: Yup.string()
      .min(8)
      .max(25)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,25}$/, "Password must be at least 8 to 25 char as well as need to have like unique symbols with number"
      )
      .required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password does not match"
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupScheme),
  });
  return (
    <>
      <Form
        onSubmit={handleSubmit(submitEvent)}
        className="register_form text-center mt-4 mb-4"
      >
        <h1>Set Password</h1>
        <div className="custom_form mt-3">
          <input
            type="password"
            placeholder="Password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password ? (
            <em className="text-danger text-start d-flex mb-2">{errors.password ? errors.password.message : ""}</em>
          ) : (
            ""
          )}
          <input
            type="password"
            placeholder="Re-Type Password"
            name="retypepassword"
            {...register("password", { required: true })}
          />
          {errors.password ? (
            <em className="text-danger text-start d-flex mb-2">
              {errors.password ? errors.password.message : ""}
            </em>
          ) : (
            ""
          )}
          <div className="btn_wrap">
            <input type="submit" value="Send" className="btn btn-success" />
          </div>
        </div>
      </Form>
    </>
  );
};

export default PasswordSetComponent;
