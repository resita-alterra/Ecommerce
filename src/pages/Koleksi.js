import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";
import ListBuku from "./../components/ListBuku";
import axios from "axios";
import MenuSamping from "./../components/MenuSamping";

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
      <div>
        {header}
        <div className="container">
          <div>
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">
                    Kategori :
                  </a>
                </div>
                <ul class="nav navbar-nav">
                  {kategori.map((elm, key) => {
                    return (
                      <li style={{ marginLeft: 10, padding: 10, fontSize: 15 }}>
                        <button
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
            </nav>
          </div>
          <div className="row">
            <div className="col-md-10">
              <ListBuku isi={this.state.buku} />
            </div>
            <div className="col-md-2">
              <ul className="list-group">
                <li className="list-group-item">Urutkan Berdasarkan</li>
                <li className="list-group-item">
                  <button
                    value="harga"
                    onClick={e => this.gantiUrutan(e, "value")}
                  >
                    harga
                  </button>
                </li>
                <li className="list-group-item">
                  <button
                    value="judul"
                    onClick={e => this.gantiUrutan(e, "value")}
                  >
                    judul
                  </button>
                </li>
                <li className="list-group-item">
                  <button
                    value="stok"
                    onClick={e => this.gantiUrutan(e, "value")}
                  >
                    stok
                  </button>
                </li>
              </ul>
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
