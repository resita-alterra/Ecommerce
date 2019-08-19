import React from "react";
import { Link } from "react-router-dom";

function HeaderPra() {
  return (
    <header>
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              UculSo
            </a>
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

{
  /* <header style={{ boxShadow: " 2px 2px 2px 2px #888888", marginBottom: 15 }}>
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
    </header> */
}
