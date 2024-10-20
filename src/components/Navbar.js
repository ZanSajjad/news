import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


export default function Navbar() {


  return (
    <>
      <nav className="navbar navbar-expand-lg   navbar-dark fixed-top px-0 p-4">
        <div className="container-lg">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ><span
          className="navbar-toggler-icon"
          style={{
            color: 'white',
            borderColor: 'white'
          }}
        ></span>
        
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sport">
                  Sport
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              
            </ul>
          
            <div>
              <Link to="/login">
                <button className="btn btn-primary rounded-pill px-3   px-4">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary rounded-pill px-3  mx-2 px-4">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
