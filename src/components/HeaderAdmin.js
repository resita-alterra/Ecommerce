import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/header.css";

function HeaderAdmin() {
  return (
    <header>
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle btn-primary btn"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span
                className="navbar-toggler-icon"
                style={{ color: "#3F9ADF", fontWeight: 900 }}
              >
                . . . .
              </span>
            </button>
            <a className="navbar-brand" href="#">
              UculSo
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-out" /> Keluar
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <span className="glyphicon glyphicon-user" /> Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderAdmin;
