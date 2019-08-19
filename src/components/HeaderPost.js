import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";

function HeaderPost(props) {
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

{
  /* <header style={{ boxShadow: " 2px 2px 2px 2px #888888", marginBottom: 15 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6">kh</div>
          <div className="col-md-6 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav className="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={() => props.logout()}>
                        Logout
                      </Link>
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
