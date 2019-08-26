import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";
import HeaderAdmin from "./../components/HeaderAdmin";
import "./../assets/css/header.css";

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
              <div className="col-md-4" />
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
              <div className="col-md-4" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <HeaderPost />
          <nav className="navbar bg-success">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle btn-primary btn"
                  data-toggle="collapse"
                  data-target="#myMenus"
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{ color: "#3F9ADF", fontWeight: 900 }}
                  >
                    . . . .
                  </span>
                </button>
                <span className="navbar-brand">Menu : </span>
              </div>
              <div className="collapse navbar-collapse" id="myMenus">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/transaksiku">Transaksiku</Link>
                  </li>

                  <li>
                    <Link to="/bukuku">Bukuku</Link>
                  </li>

                  <li>
                    <Link to="/keranjangku">Keranjangku</Link>
                  </li>
                  <li>
                    <Link to="/tambahbuku">Tambah Buku</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-3" />

              <div className="col-md-6">
                <div id="cardprofil" class="card">
                  <img
                    class="card-img-top"
                    src={this.props.identitas.foto}
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h3 class="card-title">{this.props.identitas.user_name}</h3>
                    <p class="card-text">{this.props.identitas.email}</p>
                    <p>Kontak : {this.props.identitas.hp}</p>
                    <p>{this.props.identitas.alamat}</p>
                    <p>Rekening : {this.props.identitas.rekening}</p>
                    <Link to="/gantiprofil">
                      <button class="btn btn-primary">Ubah Profil</button>
                    </Link>
                  </div>
                </div>
              </div>
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
