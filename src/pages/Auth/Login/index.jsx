import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../../../utils/validate";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import "../User.scss";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../redux/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const { currentUser, isFetching } = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUser !== null) {
      navigate("/");
    }
  }, [formValues]);
  const handleChange = ({ currentTarget: input }) => {
    setFormValues({ ...formValues, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        {},
        { params: formValues }
      );
      if (res.data.code === "400") {
        dispatch(loginFailure);
      } else {
        const acc = JSON.parse(res.data.acc);
        console.log(acc);
        dispatch(loginSuccess(acc));
      navigate("/");

      }
    } catch (err) {
      dispatch(loginFailure);
    }
  };
  const hanldeBlur = (e) => {
    const name = e.target.name;
    const error = validate(formValues);
    if (name === "email") {
      setFormErrors({ ...formErrors, [name]: error.email });
    } else if (name === "password") {
      setFormErrors({ ...formErrors, [name]: error.password });
    }
  };
  const validate = (values) => {
    const errors = { email: "", password: "" };
    if (!values.email) {
      errors.email = "Vui lòng nhập email!";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Vui lòng nhập đúng email!";
    }
    if (!values.password) {
      errors.password = "Vui lòng nhập mật khẩu!";
    } else if (!isValidPassword(values.password)) {
      errors.password = "Mật khẩu ít nhất 6 ký tự!";
    }

    return errors;
  };

  return (
    <div className="login">
      <div className="login__title">
        <h1>Đăng nhập</h1>
      </div>
      <div className="login__content">
        <div className="login__content__form">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="text"
                placeholder="Email"
                onBlur={(e) => hanldeBlur(e)}
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p>{formErrors.email}</p>}
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Mật khẩu"
                onBlur={(e) => hanldeBlur(e)}
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {formErrors.password && <p>{formErrors.password}</p>}
            </div>
            <button
              type="submit"
              disabled={
                !isValidEmail(formValues.email) ||
                !isValidPassword(formValues.password)
              }
            >
              Đăng nhập
            </button>
          </form>
          <div className="forgot--password">
            <Link to="/forgot--password">Quên mật khẩu?</Link>
          </div>
          <div className="forgot--password">
            <Link to="/auth/register">Đăng ký</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
