import React, { useState } from "react";
import { Form, FormSelect } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import DefaultImg from "../../assets/images/default_img.png";
import Select from "react-select";

const RegisterComponent = () => {
    const [thumb, setThumb] = useState();
    const {register, handleSubmit, setValue, setError, formState: {errors}} = useForm();
    const options = [
        { value: 'seller', label: 'Seller' },
        { value: 'customer', label: 'Buyer' }
      ]
      const registerSubmit = (data) =>{
        data.role = data.role.value;
        console.log(data);
        
      }
  return (
    <>
      <Form onSubmit={handleSubmit(registerSubmit)} className="register_form text-center mt-4 mb-4">
        <h1>Register</h1>
        <div className="custom_form mt-3">
          <input type="text" placeholder="Full Name" name="fullname" />
          
          <input type="email" placeholder="Email Address" name="email" />
          {/* <FormSelect>
            <option value="">--Select any one--</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </FormSelect> */}
          <Select options={options} onChange={(e)=> {setValue("role", e)}} />
          <div className="img_holder">
            <input type="file" onChange={(e)=>{
                e.preventDefault();
                const image = e.target.files[0];
                // console.log(image);
                const ext = (image.name.split(".")).pop();
                console.log("extension", ext);
                if(['jpg','png','jpeg','gif','bmp','webp'].includes(ext.toLowerCase())){
                    if(image.size <=3000000){
                        setThumb(image)
                        setValue("image", image);
                    }
                }else{
                    setError("image", "Image format is not supported");
                }
            }}/>
            <span className="thum_img_wrapper">
                <img src={thumb ? URL.createObjectURL(thumb) : DefaultImg} alt="thum_img" />
            </span>
          </div>
          <input type="password" placeholder="Password" name="password" />
          <div className="btn_wrap">
            <input type="submit" value="Register" className="btn btn-success" />
            <div className="redirect_link">
              <NavLink to={"/login"}>Login</NavLink>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default RegisterComponent;
