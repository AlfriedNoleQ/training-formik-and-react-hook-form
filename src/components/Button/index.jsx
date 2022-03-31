import React from 'react'

const Button = (props) => {
    const { type, children, className, loading, ...rest } = props
    return (
        <button className={className} type={type} {...rest}>
            { loading ? 'Loading' : children }
        </button>
    )
}

export default Button