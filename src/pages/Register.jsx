import React from 'react'
import './register.css';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup"

import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const schema = Yup.object({
    email: Yup
      .string()
      .email()
      .required(),
    password: Yup
      .string()
      .required(),
    confirmPassword: Yup
      .string()
      .oneOf([Yup.ref("password"), null]),
    name: Yup
      .string()
      .required(),
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  const submitForm = (values) => {
    console.log(values);
  }

  return (
    <>
      <form className="form-register" onSubmit={handleSubmit(submitForm)}>
        <h1>REGISTER FORM</h1>
        
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div>
          <label>Confirm password</label>
          <input type="password" {...register("confirmPassword", { valueAsNumber: true })} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <label>Name</label>
          <input {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* <Input 
          isValid={errors.email && errors.email.message} 
          label="email" 
          placeholder="Register email..." 
          type="text" 
          name="email"
          {...register('email')} 
        /> */}
        
        {/* <Input 
          isValid={errors.password && errors.password.message} 
          label="password" 
          placeholder="Register password..." 
          type="password" 
          {...register('password')}  
        />
        
        <Input 
          isValid={errors.confirmPassword && errors.confirmPassword.message} 
          label="confirm password" 
          placeholder="Register confirm password..." 
          type="password" 
          {...register('confirmPassword')} 
        />
      
        <Input 
          isValid={errors.name && errors.name.message} 
          label="name" 
          placeholder="Register name" 
          type="text" 
          {...register('name')} 
        /> */}
        
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}

export default Register