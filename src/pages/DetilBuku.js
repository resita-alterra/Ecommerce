import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";

class DetilBuku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buku: {},
      banyak: 0
    };
    this.Tambah = this.Tambah.bind(this);
    this.Beli = this.Beli.bind(this);
  }
  componentDidMount() {
    const self = this;
    axios
      .get(self.props.baseUrl + "/bacaan/" + self.props.match.params.id)
      .then(function(response) {
        self.setState({ buku: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  Tambah(e) {
    e.preventDefault();
    this.setState({ banyak: e.target.value });
  }

  Beli(e) {
    e.preventDefault();
    const self = this;
    let data = {
      method: "POST",
      url: self.props.baseUrl + "/transaksi",
      data: {
        buku_id: self.props.match.params.id,
        jumlah: self.state.banyak,
        status: "keranjang"
      },
      headers: {
        Authorization: "Bearer " + self.props.token
      }
    };

    if (self.props.is_login === true) {
      axios(data)
        .then(function(response) {
          console.log(response.data);
          alert("Berhasil");

          self.props.history.push("/profile");
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      alert(
        "Silahkan masuk atau mendaftar terlebih dahulu untuk membeli. Terima kasih"
      );
    }
  }

  render() {
    let header = null;
    if (this.props.is_login === true) {
      header = <HeaderPost />;
    } else {
      header = <HeaderPra />;
    }
    return (
      <div>
        {header}
        <div className="container">
          <div className="card" style={{ width: 400 }}>
            <img
              className="card-img-top"
              src={this.state.buku.url_picture}
              alt="Card image"
              style={{ height: 300 }}
            />
            <div className="card-body">
              <h4 className="card-title">{this.state.buku.judul}</h4>
              <p className="card-text">
                Pengarang : {this.state.buku.pengarang}
              </p>
              <p className="card-text">Penerbit : {this.state.buku.penerbit}</p>
              <p className="card-text">Harga : {this.state.buku.harga}</p>
              <p className="card-text">Stok : {this.state.buku.stok}</p>
              <input
                type="number"
                name="quantity"
                min="1"
                max={this.state.buku.stok}
                onChange={this.Tambah}
              />
              <button onClick={this.Beli}>Beli</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, identitas, token, baseUrl",
  actions
)(DetilBuku);
