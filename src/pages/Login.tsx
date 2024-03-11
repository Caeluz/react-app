import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import the CSS file

// Redux
import { Dispatch } from "@reduxjs/toolkit";
import store, { loginSuccess, loginFailure } from "../store/Store";

// interface LoginProps {
//   onLogin: (username: string, password: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  // const token = store.getState().token;

  // console.log("Token:", token);
  // console.log("Is authenticated:", store.getState().isAuthenticated);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1",
        {
          username: formData.username,
          password: formData.password,
        }
      );
      // Assuming your API returns some data indicating success or failure
      // Adjust this logic based on your API response
      if (response.data.success) {
        store.dispatch(loginSuccess(response.data.token));
      } else {
        // Handle login failure
        if (response.data.message) {
          setErrorMessage(response.data.message);
        } else if (response.data.errors) {
          console.error("Login failed");
          store.dispatch(loginFailure());
        } else {
          console.log("success");
          store.dispatch(loginSuccess(response.data.token));
        }
      }
    } catch (error: any) {
      // Handle errors
      if (error.response && error.response.data) {
        if (error.response.data.errors) {
          // If the error response contains validation errors
          setErrors(error.response.data.errors);
        } else if (error.response.data.message) {
          // If the error response contains a general error message
          setErrorMessage(error.response.data.message);
        }
      } else {
        // For other types of errors (e.g., network errors)
        console.error("Error occurred:", error);
      }
    }
  };

  return (
    <div className="login-container">
      {" "}
      {/* Add a container with a CSS class */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {" "}
          {/* Add a CSS class for form groups */}
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="error">{errors.username[0]}</div>}
        </div>
        <div className="form-group">
          {" "}
          {/* Add a CSS class for form groups */}
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className="error">{errors.password[0]}</div>}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
