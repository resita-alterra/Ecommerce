import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";
import ListTransaksi from "../components/ListTransaksi";

class Keranjangku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keranjang: []
    };
    this.pesan = this.pesan.bind(this);
  }

  componentDidMount() {
    const self = this;
    axios
      .get(self.props.baseUrl + "/transaksi/semua", {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {
        let hasil = response.data.keranjang;
        self.setState({ keranjang: hasil });
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  pesan(e) {
    const self = this;
    e.preventDefault();
    for (let i = 0; i < self.state.keranjang.length; i++) {
      let id = self.state.keranjang[i].id;
      axios
        .put(self.props.baseUrl + "/transaksi/" + id, { status: "pesan" })
        .then(function(response) {
          console.log(response);
          console.log(self.props.identitas);
          self.componentDidMount();
        })
        .catch(function(error) {
          console.log(error);
          alert("buku dengan id " + id + " telah habis terjual");
          console.log(self.props);
          axios
            .delete(self.props.baseUrl + "/transaksi/" + id, {
              headers: { Authorization: "Bearer " + self.props.token }
            })
            .then(function(response) {
              console.log(response);
              self.componentDidMount();
            })
            .catch(function(error) {
              console.log(error);
            });
        });
    }
  }

  render() {
    return (
      <div>
        <HeaderPost />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ color: "#23527C" }}>Keranjangku :</h2>
              <ListTransaksi isi={this.state.keranjang} sebagai="pembeli" />
              <button onClick={this.pesan}>Pesan</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  "is_login,identitas,token,baseUrl",
  actions
)(Keranjangku);
