import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";

function Home(props) {
  console.log(props.is_login);
  if (props.is_login == true) {
    return (
      <div>
        <HeaderPost />
        <p>Ini home kalo udah login</p>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderPra />
        <p>Ini home kalo belum login</p>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(Home);
