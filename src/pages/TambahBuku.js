import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import axios from "axios";
import HeaderPost from "../components/HeaderPost";

class TambahBuku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: null,
      pengarang: null,
      penerbit: null,
      harga: null,
      stok: null,
      tipe: null,
      url_picture: null
    };
    this.akuTambahkan = this.akuTambahkan.bind(this);
  }

  akuTambahkan(e) {
    e.preventDefault();
    const self = this;
    console.log(this.state);
    let data = {
      judul: self.state.judul,
      pengarang: self.state.pengarang,
      penerbit: self.state.penerbit,
      harga: self.state.harga,
      stok: self.state.stok,
      tipe: self.state.tipe,
      url_picture: self.state.url_picture
    };

    let aturan = {
      method: "POST",
      url: self.props.baseUrl + "/bacaan",
      data: data,
      headers: {
        Authorization: "Bearer " + self.props.token
      }
    };

    axios(aturan)
      .then(function(response) {
        console.log(response.data);
        alert("sukses");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <HeaderPost />
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 form-group"
              style={{ border: "dotted grey 2px", padding: 50 }}
            >
              <form>
                <label for="judul">Judul</label>
                <br />
                <input
                  type="text"
                  id="judul"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ judul: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <label>Pengarang</label>
                <br />
                <input
                  type="text"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ pengarang: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <label>Penerbit</label>
                <br />
                <input
                  type="text"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ penerbit: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <label>Harga</label>
                <br />
                <input
                  type="number"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ harga: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <label>Stok</label>
                <br />
                <input
                  type="number"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ stok: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <label>Tipe</label>
                <br />
                <input
                  type="text"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ tipe: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <label>URL gambar</label>
                <br />
                <input
                  type="text"
                  onChange={e => {
                    e.preventDefault();
                    this.setState({ url_picture: e.target.value });
                  }}
                  className="form-control"
                />
                <br />
                <button
                  className="form-control btn-info"
                  onClick={this.akuTambahkan}
                >
                  Tambahkan Buku
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("is_login,token,baseUrl")(TambahBuku);
