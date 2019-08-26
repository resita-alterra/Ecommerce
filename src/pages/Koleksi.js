import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";
import ListBuku from "./../components/ListBuku";
import axios from "axios";

class Koleksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buku: [],
      kategori: null,
      urutan: null
    };
    this.gantiKategori = this.gantiKategori.bind(this);
    this.gantiUrutan = this.gantiUrutan.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  gantiUrutan(e) {
    e.preventDefault();
    let ini = e.target.value;
    console.log(ini);
    this.setState({ urutan: ini });
  }

  gantiKategori(e) {
    e.preventDefault();
    let ini = e.target.value;
    console.log(ini);
    this.setState({ kategori: ini });
  }

  componentDidMount() {
    const self = this;

    axios
      .get(self.props.baseUrl + "/bacaan/publik")
      .then(function(response) {
        let hasil = response.data;
        self.setState({ buku: hasil });
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.kategori !== this.state.kategori ||
      prevState.urutan !== this.state.urutan
    ) {
      const self = this;
      axios
        .get(self.props.baseUrl + "/bacaan/publik", {
          params: {
            tipe: self.state.kategori,
            order: self.state.urutan
          }
        })
        .then(function(response) {
          let hasil = response.data;
          self.setState({ buku: hasil });
          console.log(self.state);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    let kategori = ["novel", "komik", "pelajaran", "sejarah", "agama", "umum"];
    let header = null;
    if (this.props.is_login == true) {
      header = <HeaderPost />;
    } else {
      header = <HeaderPra />;
    }
    return (
      <div id="koleksi">
        {header}
        <div className="container">
          <div>
            {/* Navigasi Kategori */}
            <nav className="navbar bg-success">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle btn-primary btn"
                    data-toggle="collapse"
                    data-target="#myKategori"
                  >
                    <span
                      className="navbar-toggler-icon"
                      style={{ color: "#3F9ADF", fontWeight: 900 }}
                    >
                      . . . .
                    </span>
                  </button>
                  <span
                    onClick={this.componentDidMount}
                    className="navbar-brand"
                  >
                    Kategori
                  </span>
                </div>
                <div className="collapse navbar-collapse" id="myKategori">
                  <ul className="nav navbar-nav navbar-right">
                    {kategori.map((elm, key) => {
                      return (
                        <li
                          style={{ marginLeft: 10, padding: 10, fontSize: 15 }}
                        >
                          <button
                            className="btn btn-primary"
                            value={elm}
                            onClick={e => this.gantiKategori(e, "value")}
                          >
                            {elm}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col-md-10">
              <ListBuku isi={this.state.buku} />
            </div>
            <div className="col-md-2">
              {/* Navigasi Urutan */}
              <nav className="navbar bg-success">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle btn-primary btn"
                      data-toggle="collapse"
                      data-target="#myUrutan"
                    >
                      <span
                        className="navbar-toggler-icon"
                        style={{ color: "#3F9ADF", fontWeight: 900 }}
                      >
                        . . . .
                      </span>
                    </button>
                    <span className="navbar-brand">Urutkan : </span>
                  </div>
                  <div className="collapse navbar-collapse" id="myUrutan">
                    <ul className="nav navbar-nav navbar-right">
                      <li style={{ margin: 20 }}>
                        <button
                          className="btn btn-success"
                          value="harga"
                          onClick={e => this.gantiUrutan(e, "value")}
                        >
                          harga
                        </button>
                      </li>

                      <li style={{ margin: 20 }}>
                        <button
                          className="btn btn-success"
                          value="judul"
                          onClick={e => this.gantiUrutan(e, "value")}
                        >
                          judul
                        </button>
                      </li>

                      <li style={{ margin: 20 }}>
                        <button
                          className="btn btn-success"
                          value="stok"
                          onClick={e => this.gantiUrutan(e, "value")}
                        >
                          stok
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "identitas,is_login,token,baseUrl",
  actions
)(Koleksi);
