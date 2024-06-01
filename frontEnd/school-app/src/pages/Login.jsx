import { FaUser, FaEyeSlash, FaEye } from "react-icons/fa";
// import "../Assets/styles/LoginRegister.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
// import Register from "./register";


function Login() {

  const [showPassword, setShowPassword] = useState(false);
//   const [showRegisterPassword, setShowRegisterPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  // const passwordRules = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$";

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    full_name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    rPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      full_name: "",
      username: "",
      rPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {

      try {
        if(values.email === '') {
          alert('LOGIN')
        } else {
        const res = await fetch('/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
  
        const data = await res.json();
        window.location.reload()
  
        console.log(data)
      }
      } catch (error) {
        console.log(error.message);
      }
      
    },
  });

  const [action, setAction] = useState('');

  const registerLink = (e) => {
    e.preventDefault();
    setAction(' active');
  };

//   const loginLink = (e) => {
//     e.preventDefault();
//     setAction('');
//   };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

//   const toggleShowRegisterPassword = () => {
//     setShowRegisterPassword(!showRegisterPassword);
//   };

//   const toggleShowRepeatPassword = () => {
//     setShowRepeatPassword(!showRepeatPassword);
//   };

  return (
    <>
 <div className={`container${action}`}>
      <div className="form-box login">
        <form onSubmit={formik.handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text" placeholder="Username" name="username" required />
            <FaUser className="icon" />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="input-box">
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={showPassword ? "text" : "password"} placeholder="Password" name="password" required />
            {/* <FaLock className="icon" /> */}
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? <FaEye className="icon"/> : <FaEyeSlash className="icon"/>}
            </button>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <a href="#" onClick={registerLink}>Forgotten Password?</a>
          </div>

          <button className="btn-43" type="submit">
            <span className="old">Login</span>
            <span className="new">Login Now</span>
          </button>

          <div className="register-now">
            <p>Don't have an account yet? <Link to="/register">Register</Link> </p>
          </div>
        </form>
      </div>
      </div> 

      {/* <Register/> */}
    </>
      
  )}

  export default Login;