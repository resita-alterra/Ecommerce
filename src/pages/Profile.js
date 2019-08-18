import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const self = this;
    axios
      .get(self.props.baseUrl + "/user", {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {
        let aku = response.data;
        self.props.setIdentitas(aku);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let identitas = this.props.identitas.id;
    return (
      <div>
        <HeaderPost />
        <p>Ini Profile</p>
        <p>{this.props.identitas.user_name}</p>
        <p>{this.props.identitas.alamat}</p>
        <p>{this.props.identitas.ktp}</p>
        <p>{this.props.identitas.hp}</p>
        <p>{this.props.identitas.email}</p>
        <p>{this.props.identitas.foto}</p>
        <Link to={"/transaksiku/" + identitas}>Transaksiku</Link>
        <br />
        <Link to={"/bukuku/" + identitas}>Bukuku</Link>
      </div>
    );
  }
}

export default connect(
  "is_login,baseUrl,identitas,token",
  actions
)(Profile);
