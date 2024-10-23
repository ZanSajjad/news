import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <div className=" container-fluid d-flex justify-content-center align-items-center vh-100  ">
        <div className="form  rounded-5 bg-dark text-white">
          <form>
            <h1 className="text-center mb-4 font-32 fw-bold text-primary ">
              Signup
            </h1>
            <div className="mb-4">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                size={"40"}
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="mb-4 position-relative">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="*********"
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
            <div className="mb-4 position-relative">
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="*********"
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
              <button type="submit" className="btn btn-primary ">
                Signup
              </button>
            </div>
            <p className="pt-4 text-center">
              Already have an <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
