import React, {useState} from "react";
import './login.css';

import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
    // const initialData = {
    //     email: '',
    //     password: ''
    // }
    // const [data, setData] = useState(initialData)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required"),
            password: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                return await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values));
                        console.log(values);
                        resolve(true)
                    }, 2000)
                })
            } catch (error) {
                console.log(
                    "🚀 ~ file: Login.jsx ~ line 19 ~ onSubmit:async ~ error",
                    error
                );
            }
        },
    });

    const { handleSubmit, isSubmitting } = formik;

    return (
        <>
            <form className="form-login" onSubmit={handleSubmit}>
                <h1>LOGIN FORM</h1>
                
                <Input
                    className="input-login"
                    name="email"
                    label="Email label"
                    type="text"
                    placeholder="Email placeholder"
                    formik={formik}
                />

                <Input
                    className="input-login"
                    name="password"
                    label="Password label"
                    type="password"
                    placeholder="Password placeholder"
                    formik={formik}
                />

                <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>Submit</Button>
            </form>
        </>
    );
};

export default Login;
