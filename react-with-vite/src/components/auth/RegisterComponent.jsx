import React, { useState } from "react";
import { Form, FormSelect } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import DefaultImg from "../../assets/images/default_img.png";
import Select from "react-select";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterComponent = ({registerSubmit}) => {
    
    const [thumb, setThumb] = useState();
    const options = [
        { value: 'seller', label: 'Seller' },
        { value: 'customer', label: 'Buyer' }
      ]
    const yupScheme = Yup.object({
        name: Yup.string().min(2).max(30).required(),
        email: Yup.string().email().required(),
        role: Yup.object({
            value: Yup.string().matches(/seller|customer/),
            label: Yup.string().matches(/Seller|Buyer/),
        }).required(),
    });
    const {register, handleSubmit, setValue, setError, formState: {errors}} = useForm();
    
      
  return (
    <>
      <Form onSubmit={handleSubmit(registerSubmit)} className="register_form text-center mt-4 mb-4">
        <h1>Register</h1>
        <div className="custom_form mt-3">
          <input type="text" placeholder="Full Name" name="fullname" {...register("fullname", {required: true})} />
          {errors.fullname? (<><em>Name is required</em></>): ""}
          
          <input type="email" placeholder="Email Address" name="email" {...register("email", {required: true})}/>
          {errors.email ? (<><em>Email is required</em></>): ""}
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
            {/* {errors?.image?.message} */}
          </div>
          <input type="password" placeholder="Password" name="password" {...register("password", {required: true})}/>
          {errors.password ? (<><em>Password is required</em></>) : ""}
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
