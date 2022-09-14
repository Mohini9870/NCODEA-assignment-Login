import React, { useState } from "react";

import { Alert } from "react-bootstrap";
import Home from "./Home";
const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("admin").replace(/"/g, '');
    let mail = localStorage.getItem("admin").replace(/"/g, '');
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  return (
    <div>
      {home ? (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="denger">
              Please fill correct info
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
