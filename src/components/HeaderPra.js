import React from "react";
import { Link } from "react-router-dom";

function HeaderPra() {
  return (
    <header style={{ boxShadow: " 2px 2px 2px 2px #888888", marginBottom: 15 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6">nh</div>
          <div className="col-md-6 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav className="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPra;
