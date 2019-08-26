import React from "react";
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
      rekening: "",
      hp: "",
      email: "",
      foto: ""
    };
    this.setAlamat = this.setAlamat.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setFoto = this.setFoto.bind(this);
    this.setHp = this.setHp.bind(this);
    this.setRekening = this.setRekening.bind(this);
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

  setRekening(e) {
    this.setState({ rekening: e.target.value });
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
      rekening: self.state.rekening,
      hp: self.state.hp,
      email: self.state.email,
      foto: self.state.foto
    };

    await axios
      .post(self.props.baseUrl + "/user", data)
      .then(function(response) {
        console.log(response.data);
        axios
          .get(self.props.baseUrl + "/login", {
            params: {
              user_name: self.state.user_name,
              password: self.state.password
            }
          })
          .then(function(response) {
            let token = response.data.token;
            self.props.setToken(token);
            self.props.login();
            console.log(self.props);
            self.props.history.push("/profile");
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <HeaderPra />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4" />
            <div
              className="col-md-4 form-group"
              style={{ border: "dotted grey 2px", padding: 20 }}
            >
              <p style={{ fontSize: 20 }}>
                Silahkan isi form berikut lalu klik tombol mendaftar
              </p>
              <form>
                <label for="user_name">Username :</label>
                <br />
                <input
                  type="text"
                  id="user_name"
                  onChange={this.setUser}
                  className="form-control"
                />
                <br />
                <label for="password">Password :</label>
                <br />
                <input
                  type="password"
                  id="password"
                  onChange={this.setPassword}
                  className="form-control"
                />
                <br />
                <label for="alamat">Alamat :</label>
                <br />
                <input
                  type="text"
                  id="alamat"
                  onChange={this.setAlamat}
                  className="form-control"
                />
                <br />
                <label for="rekening">No. Rekening :</label>
                <br />
                <input
                  type="text"
                  id="rekening"
                  onChange={this.setRekening}
                  className="form-control"
                />
                <br />
                <label for="hp">Kontak : </label>
                <br />
                <input
                  type=""
                  id="hp"
                  onChange={this.setHp}
                  className="form-control"
                />
                <br />
                <label for="email">Email :</label>
                <br />
                <input
                  type=""
                  id="email"
                  onChange={this.setEmail}
                  className="form-control"
                />
                <br />
                <label for="foto">URL Foto :</label>
                <br />
                <input
                  type="text"
                  id="foto"
                  onChange={this.setFoto}
                  className="form-control"
                />
                <br />
                <button
                  type="submit"
                  onClick={this.akuMendaftar}
                  className="form-control btn-info"
                >
                  Mendaftar
                </button>
              </form>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login,baseUrl,identitas,token",
  actions
)(Register);
