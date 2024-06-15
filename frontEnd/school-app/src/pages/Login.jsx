import { FaUser, FaEyeSlash, FaEye } from "react-icons/fa";
// import "../Assets/styles/LoginRegister.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useUserContext } from "../contexts/userContext";
// import Register from "./register";


function Login() {
  const {setToken, token, setLoading, setUser, setIsAuthenticated} = useUserContext();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
//   const [showRegistepassword, setShowRegistepassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  // const passwordRules = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$";

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  console.log('Login COMPONENT token: ', token);

  useEffect(() => {
    console.log('LOGIN USEEFFECT: ', token);
    document.title = "Login";
    if(token) {
      navigate('/home');
    }

  }, [token])



  

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      console.log(values);
      // alert("Login Successful")

    try {

        const res = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: values.username,
              password: values.password,
              }),
        });

        const data = await res.json();
        console.log(data);
        if(data.status === true){
          alert(data.message)
          localStorage.setItem('token', data.token)
          setToken(data.token)
          navigate('/')
        } else{
          alert(data.message)
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

//   const toggleShowRegistepassword = () => {
//     setShowRegistepassword(!showRegistepassword);
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
              <div className="error-message">{formik.errors.username}</div>
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
              <div className="error-message pass">{formik.errors.password}</div>
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