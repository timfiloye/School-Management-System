// import { FaUser, FaEnvelope, FaRegUserCircle, FaEyeSlash, FaEye } from "react-icons/fa";
// import "./LoginRegister.css";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from 'yup';

// function LoginRegister() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showRegisterPassword, setShowRegisterPassword] = useState(false);
//   const [showRepeatPassword, setShowRepeatPassword] = useState(false);

//   // const passwordRules = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$";

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
//     full_name: Yup.string().required('Required'),
//     username: Yup.string().required('Required'),
//     rPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
//   });

  

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       full_name: "",
//       username: "",
//       rPassword: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async values => {

//       try {
//         if(values.email === '') {
//           alert('LOGIN')
//         } else {
//         const res = await fetch('/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values)
//         })
  
//         const data = await res.json();
//         window.location.reload()
  
//         console.log(data)
//       }
//       } catch (error) {
//         console.log(error.message);
//       }
      
//     },
//   });

//   const [action, setAction] = useState('');

//   const registerLink = (e) => {
//     e.preventDefault();
//     setAction(' active');
//   };

//   const loginLink = (e) => {
//     e.preventDefault();
//     setAction('');
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleShowRegisterPassword = () => {
//     setShowRegisterPassword(!showRegisterPassword);
//   };

//   const toggleShowRepeatPassword = () => {
//     setShowRepeatPassword(!showRepeatPassword);
//   };

//   return (
//     <div className={`container${action}`}>
//       <div className="form-box login">
//         <form onSubmit={formik.handleSubmit}>
//           <h1>Login</h1>

//           <div className="input-box">
//             <input
//               value={formik.values.username}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type="text" placeholder="Username" name="username" required />
//             <FaUser className="icon" />
//             {formik.touched.username && formik.errors.username ? (
//               <div>{formik.errors.username}</div>
//             ) : null}
//           </div>

//           <div className="input-box">
//             <input
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type={showPassword ? "text" : "password"} placeholder="Password" name="password" required />
//             {/* <FaLock className="icon" /> */}
//             <button type="button" onClick={toggleShowPassword}>
//               {showPassword ? <FaEye className="icon"/> : <FaEyeSlash className="icon"/>}
//             </button>
//             {formik.touched.password && formik.errors.password ? (
//               <div>{formik.errors.password}</div>
//             ) : null}
//           </div>

//           <div className="remember-forget">
//             <label><input type="checkbox" />Remember me</label>
//             <a href="#" onClick={registerLink}>Forgotten Password?</a>
//           </div>

//           <div className="btn-neon-10" >
//             <a>
//               <button type="submit">Login</button>
//             </a>
//           </div>

//           <div className="register-now">
//             <p>Don't have an account yet? <a href="#" onClick={registerLink}>Register</a></p>
//           </div>
//         </form>
//       </div>

//       {/* REGISTRATION FORM */}
//       <div className="form-box register">
//         <form onSubmit={formik.handleSubmit}>
//           <h1>Registration</h1>
//           <p className="easy">It's quick and easy</p> <hr />
//           <div className="input-box">
//             <input
//               value={formik.values.full_name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type="text" placeholder="Full Name" name="full_name" required />
//             <FaRegUserCircle className="icon" />
//             {formik.touched.full_name && formik.errors.full_name ? (
//               <div>{formik.errors.full_name}</div>
//             ) : null}
//           </div>
//           <div className="input-box">
//             <input
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type="email" placeholder="Email" name="email" required />
//             <FaEnvelope className="icon" />
//             {formik.touched.email && formik.errors.email ? (
//               <div>{formik.errors.email}</div>
//             ) : null}
//           </div>
//           <div className="input-box">
//             <input
//               value={formik.values.username}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type="text" placeholder="Username" name="username" required />
//             <FaUser className="icon" />
//             {formik.touched.username && formik.errors.username ? (
//               <div>{formik.errors.username}</div>
//             ) : null}
//           </div>
//           <div className="input-box">
//             <input
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type={showRegisterPassword ? "text" : "password"} placeholder="Password" name="password" required />
//             {/* <FaLock className="icon" /> */}
//             <button type="button" onClick={toggleShowRegisterPassword}>
//               {showRegisterPassword ? <FaEye className="icon"/> : <FaEyeSlash className="icon"/>}
//             </button>
//             {formik.touched.password && formik.errors.password ? (
//               <div>{formik.errors.password}</div>
//             ) : null}
//           </div>

//           <div className="input-box">
//             <input
//               value={formik.values.rPassword}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               type={showRepeatPassword ? "text" : "password"} placeholder="Repeat Password" name="rPassword" required />
//             {/* <FaLock className="icon" /> */}
//             <button type="button" onClick={toggleShowRepeatPassword}>
//               {showRepeatPassword ? <FaEye className="icon"/> : <FaEyeSlash className="icon"/>}
//             </button>
//             {formik.touched.rPassword && formik.errors.rPassword ? (
//               <div>{formik.errors.rPassword}</div>
//             ) : null}
//           </div>

//           <div className="remember-forget">
//             <label> <input type="checkbox" />I agree to the terms & conditions</label>
//           </div>

//           <button className="btn-15" type="submit"><span>Register</span></button>

//           <div className="register-now">
//             <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginRegister;
