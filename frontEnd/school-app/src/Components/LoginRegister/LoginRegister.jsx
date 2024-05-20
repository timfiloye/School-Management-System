import { FaUser, FaLock, FaEnvelope, FaRegUserCircle } from "react-icons/fa";
import "./LoginRegister.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function LoginRegister() {
  const passwordRules = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$";
  // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').matches(passwordRules, {message: "Please create a stronger password"}).required('Required'),
    fName: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    rPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fName: "",
      username: "",
      rPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const [action, setAction] = useState('');

  const registerLink = (e) => {
    e.preventDefault();
    setAction(' active');
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  return (
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
              type="password" placeholder="Password" name="password" required />
            <FaLock className="icon" />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <a href="#" onClick={registerLink}>Forgotten Password?</a>
          </div>

          <div className="btn-neon-10">
                    <a>
                    <button>Login</button>
                    </a>
          </div>

          <div className="register-now">
            <p>Don't have an account yet? <a href="#" onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div>

      {/* REGISTRATION FORM */}
      <div className="form-box register">
        <form onSubmit={formik.handleSubmit}>
          <h1>Registration</h1>
          <p className="easy">It's quick and easy</p> <hr />
          <div className="input-box">
            <input
              value={formik.values.fName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text" placeholder="Full Name" name="fName" required />
            <FaRegUserCircle className="icon" />
            {formik.touched.fName && formik.errors.fName ? (
              <div>{formik.errors.fName}</div>
            ) : null}
          </div>
          <div className="input-box">
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email" placeholder="Email" name="email" required />
            <FaEnvelope className="icon" />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
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
              type="password" placeholder="Password" name="password" required />
            <FaLock className="icon" />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="input-box">
            <input
              value={formik.values.rPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password" placeholder="Repeat Password" name="rPassword" required />
            <FaLock className="icon" />
            {formik.touched.rPassword && formik.errors.rPassword ? (
              <div>{formik.errors.rPassword}</div>
            ) : null}
          </div>

          <div className="remember-forget">
            <label> <input type="checkbox" />I agree to the terms & conditions</label>
          </div>

          <button className="btn-15" type="submit"><span>Register</span></button>

          <div className="register-now">
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
