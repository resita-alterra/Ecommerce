import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";
import "./../assets/css/header.css";

function Home(props) {
  console.log(props.is_login);
  if (props.is_login == true) {
    return (
      <div>
        <HeaderPost />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                id="bacol"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/paul-sweeney-book-quote-1531936023.jpg?crop=1xw:1xh;center,top&resize=480:*"
                style={{ width: 470 }}
              />
            </div>
            <div className="col-md-7">
              <div
                className="row d-flex align-items-center"
                style={{ backgroundColor: "white", height: "84vh" }}
              >
                <div className="col-12 align-self-center text-center">
                  <h1 style={{ color: "#8FB2E2", fontSize: 60 }}>
                    Selamat datang di UculSo, {props.identitas.user_name}.
                  </h1>
                  <p style={{ fontSize: 20 }}>Selamat berbelanja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderPra />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                id="bacol2"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/paul-sweeney-book-quote-1531936023.jpg?crop=1xw:1xh;center,top&resize=480:*"
                style={{ width: 470 }}
              />
            </div>
            <div className="col-md-7">
              <div
                className="row d-flex align-items-center"
                style={{ backgroundColor: "white", height: "84vh" }}
              >
                <div className="col-12 align-self-center text-center">
                  <h1 style={{ color: "#8FB2E2", fontSize: 60 }}>
                    Selamat datang di UculSo
                  </h1>
                  <p style={{ fontSize: 20 }}>
                    Silahkan melihat koleksi kami di menu koleksi
                  </p>
                  <p>Untuk berbelanja, anda harus mendaftar terlebih dahulu</p>
                  <p>ahdfgsafdsajfghgf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, identitas",
  actions
)(Home);
