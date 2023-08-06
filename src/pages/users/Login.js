import React from 'react'
import { useFormik } from 'formik';
import { loginSchema } from '../../sechema';
import { useNavigate } from 'react-router-dom';
const initialValues = {
    username:"",
    password:""
}
const Login = () => {
  const navigate = useNavigate();
  const {values,errors,handleChange,handleSubmit,handleBlur,handleReset} = useFormik({
    initialValues: initialValues,
    validationSchema:loginSchema,
    onSubmit: (values) => {
        console.log(values);
        navigate('/');
        handleReset(initialValues)
    },
  })
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
            <div className='text-danger'>
                
            </div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type="text" placeholder='Enter Username' name='username' value={values.username} className='form-control rounded-0' onChange={handleChange} autoComplete='off'/>
                    <p className='text-danger'>{errors.username}</p>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' value={values.password} onChange={handleChange} className='form-control rounded-0' />
                    <p className='text-danger'>{errors.password}</p>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
                <p>You are agree to aour terms and policies</p>
            </form>
        </div>
    </div>
  )
}

export default Login;