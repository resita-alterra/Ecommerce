import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/header.css";

function HeaderPra() {
  return (
    <header>
      <nav className="navbar navbar-light bg-info">
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
            <Link to="/" className="navbar-brand">
              UculSo
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/koleksi">Koleksi</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/register">
                  <span className="glyphicon glyphicon-user" /> Mendaftar
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-in" /> Masuk
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderPra;
