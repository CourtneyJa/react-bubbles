import React, { useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", data)
      .then(res => {
        console.log("posting", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => {
        console.log("posting error", err);
      });
  };

  const handleChange = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={data.username}
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            value={data.password}
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </>
  );
};

export default Login;
