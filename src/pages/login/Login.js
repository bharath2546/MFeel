import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h3>
                <b> SignIn Here</b>
              </h3>
              <br />
              <form>
                <div className="form-outline mb-4">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                  <label className="form-label">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check"></div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handle}
                >
                  SignIn
                </button>
                <Link
                  to="/signup"
                  className="btn btn-primary btn-lg btn-block"
                  style={{ marginLeft: "100px" }}
                >
                  SignUp
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
