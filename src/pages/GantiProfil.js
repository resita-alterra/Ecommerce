import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";

class GantiProfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      alamat: null,
      rekening: null,
      hp: null,
      email: null,
      foto: null
    };
    this.setAlamat = this.setAlamat.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setFoto = this.setFoto.bind(this);
    this.setHp = this.setHp.bind(this);
    this.setRekening = this.setRekening.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.akuTerapkan = this.akuTerapkan.bind(this);
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

  async akuTerapkan(e) {
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
      .put(self.props.baseUrl + "/user", data, {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {
        console.log(response.data);
        axios
          .get(self.props.baseUrl + "/login", {
            params: {
              user_name: response.data.user_name,
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
            alert(error);
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
        <HeaderPost />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4" />
            <div className="col-md-4 form-group">
              <p style={{ fontSize: 20 }}>
                Silahkan isi form berikut lalu klik tombol terapkan untuk
                menerapkan perubahan. Silahkan kososngkan bagian yang tidak
                ingin diubah. Password tidak boleh kosong !
              </p>
              <form>
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
                <label for="ktp">No. Rekening :</label>
                <br />
                <input
                  type="text"
                  id="ktp"
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
                  onClick={this.akuTerapkan}
                  className="form-control btn-info"
                >
                  Terapkan
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
)(GantiProfil);
