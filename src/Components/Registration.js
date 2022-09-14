import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPass) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved in local Storage");
      setLogin(!login);
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };
  return (
    <div className="register">
      {login ? (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="reEnterPassword"
              placeholder="re-enter password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
          {flag && (
            <Alert color="primary" variant="denger">
              Please fill every feild
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Registration;
