import React from 'react'
import './input.css';

const Input = (props) => {
    const { label, name, type, placeholder, value, className, isValid, register, formik={},  ...rest } = props;
    const { handleChange, handleBlur, values, errors, touched } = formik;

    return (
        <>
        <div className="input">
            <label>{label}</label>
            <input
                className={errors?.[name] && touched?.[name] && "isValid"}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.[name]}
                // {...register(name)}
                {...rest}
            />
            <span className="text-error">
                {errors?.[name] && touched?.[name] && errors?.[name]}
                {isValid}
            </span>
        </div>
        </>
    )
}

export default Input