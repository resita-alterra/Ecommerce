import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import "./../assets/css/header.css";

function HeaderPost(props) {
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
                <Link to="/profile">
                  <span className="glyphicon glyphicon-user">Profil</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => props.logout()}>
                  <span className="glyphicon glyphicon-log-out" /> Keluar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default connect(
  "is_login, token, identitas",
  actions
)(HeaderPost);
