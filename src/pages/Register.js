import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      alamat: "",
      ktp: "",
      hp: "",
      email: "",
      foto: ""
    };
    this.setAlamat = this.setAlamat.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setFoto = this.setFoto.bind(this);
    this.setHp = this.setHp.bind(this);
    this.setKtp = this.setKtp.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUser = this.setUser.bind(this);
    this.akuMendaftar = this.akuMendaftar.bind(this);
  }

  setUser(e) {
    this.setState({ user_name: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }

  setAlamat(e) {
    this.setState({ alamat: e.target.value });
  }

  setKtp(e) {
    this.setState({ ktp: e.target.value });
  }

  setHp(e) {
    this.setState({ hp: e.target.value });
  }

  setEmail(e) {
    this.setState({ email: e.target.value });
  }

  setFoto(e) {
    this.setState({ foto: e.target.value });
  }

  async akuMendaftar(e) {
    e.preventDefault();
    const self = this;
    console.log(self.state);

    let data = {
      user_name: self.state.user_name,
      password: self.state.password,
      alamat: self.state.alamat,
      ktp: self.state.ktp,
      hp: self.state.hp,
      email: self.state.email,
      foto: self.state.foto
    };

    await axios
      .post(self.props.baseUrl + "/user", data)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    await axios
      .get(self.props.baseUrl + "/login", {
        params: {
          user_name: self.state.user_name,
          password: self.state.password
        }
      })
      .then(function(response) {
        let token = response.data.token;
        self.props.setToken(token);
      })
      .catch(function(error) {
        console.log(error);
      });

    self.props.login();

    // axios({
    //   method: "post",
    //   url: "http://0.0.0.0:6000/user",
    //   data: {
    //     user_name: self.state.user_name,
    //     password: self.state.password,
    //     alamat: self.state.alamat,
    //     ktp: self.state.ktp,
    //     hp: self.state.hp,
    //     email: self.state.email,
    //     foto: self.state.foto
    //   },
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    console.log(self.props);
  }

  render() {
    return (
      <div>
        <HeaderPra />
        <form>
          <label for="user_name">user_name</label>
          <input type="text" id="user_name" onChange={this.setUser} />
          <br />
          <label for="password">password</label>
          <input type="password" id="password" onChange={this.setPassword} />
          <br />
          <label for="alamat">alamat</label>
          <input type="text" id="alamat" onChange={this.setAlamat} />
          <br />
          <label for="ktp">ktp</label>
          <input type="text" id="ktp" onChange={this.setKtp} />
          <br />
          <label for="hp">hp</label>
          <input type="" id="hp" onChange={this.setHp} />
          <br />
          <label for="email">email</label>
          <input type="" id="email" onChange={this.setEmail} />
          <br />
          <label for="foto">foto</label>
          <input type="text" id="foto" onChange={this.setFoto} />
          <br />
          <Link to="/profile">
            <button type="submit" onClick={this.props.login}>
              Register
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect(
  "is_login,baseUrl,identitas,token",
  actions
)(Register);
