import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";
import HeaderAdmin from "./../components/HeaderAdmin";

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
    if (this.props.identitas.user_name == "admin") {
      return (
        <div>
          <HeaderAdmin />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div class="card bg-info" style={{ padding: 50 }}>
                  <div class="card-body">
                    <form className="form-group">
                      <Link to="/edituser">
                        <button
                          className="form-control btn-primary"
                          style={{ padding: 20, fontSize: 30, height: 90 }}
                        >
                          Tabel User
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
                <div class="card bg-info" style={{ padding: 50 }}>
                  <div class="card-body">
                    <form className="form-group">
                      <Link to="/edittransaksi">
                        <button
                          className="form-control btn-primary"
                          style={{ padding: 20, fontSize: 30, height: 90 }}
                        >
                          Tabel Transaksi
                        </button>
                      </Link>
                    </form>
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
          <HeaderPost />
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <Link to={"/transaksiku"}>Transaksiku</Link>
                <br />
                <Link to={"/bukuku"}>Bukuku</Link>
              </div>
              <div className="col-md-6">
                <div
                  class="card"
                  style={{ width: 500, border: "dotted grey 2px", padding: 50 }}
                >
                  <img
                    class="card-img-top"
                    src={this.props.identitas.foto}
                    alt="Card image"
                    style={{ width: 400 }}
                  />
                  <div class="card-body">
                    <h3 class="card-title">{this.props.identitas.user_name}</h3>
                    <p class="card-text">{this.props.identitas.email}</p>
                    <p>{this.props.identitas.hp}</p>
                    <p>{this.props.identitas.alamat}</p>
                    <p>{this.props.identitas.ktp}</p>
                    <Link to="/gantiprofil">
                      <button class="btn btn-primary">Ubah Profil</button>
                    </Link>
                  </div>
                </div>
                {/* <p>Ini Profile</p>
                <p>{this.props.identitas.user_name}</p>
                <p>{this.props.identitas.alamat}</p>
                <p>{this.props.identitas.ktp}</p>
                <p>{this.props.identitas.hp}</p>
                <p>{this.props.identitas.email}</p>
                <img src={this.props.identitas.foto} /> */}
              </div>
              <div className="col-md-2" />
              <Link to="/tambahbuku">Tambah buku</Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "is_login,baseUrl,identitas,token",
  actions
)(Profile);
