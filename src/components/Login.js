import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPass, setShowPass] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="container-fluid bg-greenish">
        <div className="form rounded-5">
          <form >
            <h1 className="text-center mb-4 font-32 fw-bold text-primary">
              LOGIN
            </h1>
            <div className="mb-4">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                size="40"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="mb-4 position-relative">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="********"
              />
              <img
                src={showPass ? "/eye-slash.svg" : "/eye.svg"}
                alt="eye icon"
                onClick={showPassword}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "70%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary fw-bold">
                LOGIN
              </button>
            </div>
            <p className="pt-4 text-center">
              Don't have an account <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
