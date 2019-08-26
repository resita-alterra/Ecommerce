import React from "react";
import { Link, Redirect } from "react-router-dom";
import { actions } from "./../store";
import { connect } from "unistore/react";
import axios from "axios";

class ListBukuEdit extends React.Component {
  constructor(props) {
    super(props);
    this.hapusBuku = this.hapusBuku.bind(this);
  }

  hapusBuku(e, id) {
    const self = this;
    e.preventDefault();
    axios
      .delete(self.props.baseUrl + "/bacaan/" + id, {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {
        console.log(response);
        alert("berhasil menghapus");
        self.props.refresh();
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div className="row">
        {this.props.isi.map((elm, key) => {
          return (
            <div className="col-md-4 col-sm-12" style={{ marginBottom: 20 }}>
              <div
                className="card text-center"
                style={{ width: 300, padding: 20, border: "dotted grey 1px" }}
              >
                <img
                  className="card-img-top"
                  src={elm.url_picture}
                  alt="Card image"
                  style={{ height: 300, overflow: "scroll" }}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {elm.judul}
                    <span style={{ fontWeight: 200 }}>({elm.tipe})</span>
                  </h4>
                  <p className="card-text">Pengarang : {elm.pengarang}</p>
                  <p className="card-text">Penerbit : {elm.penerbit}</p>
                  <p className="card-text">Harga : {elm.harga}</p>
                  <p className="card-text">Stok : {elm.stok}</p>
                  <p>Deskripsi: {elm.deskripsi}</p>
                  <Link to={"/editbuku/" + elm.id}>
                    <button className="btn btn-success" style={{ margin: 20 }}>
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={e => this.hapusBuku(e, elm.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  "baseUrl, is_login, identitas, token",
  actions
)(ListBukuEdit);
