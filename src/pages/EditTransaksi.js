import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderAdmin from "./../components/HeaderAdmin";
import axios from "axios";

class EditTransaksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trx: []
    };
    this.ubahTrx = this.ubahTrx.bind(this);
  }

  componentDidMount() {
    const self = this;

    axios
      .get(self.props.baseUrl + "/transaksi/admin", {
        headers: {
          Authorization: "Bearer " + self.props.token
        }
      })
      .then(function(response) {
        let hasil = response.data;
        self.setState({ trx: hasil });
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  ubahTrx(e, id) {
    const self = this;
    e.preventDefault();
    axios
      .put(
        self.props.baseUrl + "/transaksi/admin/" + id,
        { status: "terkirim" },
        {
          headers: {
            Authorization: "Bearer " + self.props.token
          }
        }
      )
      .then(function(response) {
        console.log(response);
        console.log(self.props.identitas);
        self.componentDidMount();
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p
                style={{ display: "block", textAlign: "center", fontSize: 25 }}
              >
                TRANSAKSI
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ID Pembeli</th>
                    <th>ID Penjual</th>
                    <th>ID Buku</th>
                    <th>Jumlah</th>
                    <th>Status</th>
                    <th>Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.trx.map((elm, key) => {
                    return (
                      <tr>
                        <td>{elm.id}</td>
                        <td>{elm.pembeli_id}</td>
                        <td>{elm.penjual_id}</td>
                        <td>{elm.buku_id}</td>
                        <td>{elm.jumlah}</td>
                        <td>{elm.status}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={e => this.ubahTrx(e, elm.id)}
                          >
                            Ubah Status
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "baseUrl, is_login, identitas, token",
  actions
)(EditTransaksi);
