import React from "react";
import { Link, Redirect } from "react-router-dom";
import { actions } from "./../store";
import { connect } from "unistore/react";
import axios from "axios";

//   hapusBuku(state, id) {

//   }

class ListBukuEdit extends React.Component {
  constructor(props) {
    super(props);
    this.hapusBuku = this.hapusBuku.bind(this);
  }

  hapusBuku(e, id) {
    const self = this;
    e.preventDefault();
    axios
      .delete(self.props.baseUrl + "/bacaan/" + id)
      .then(function(response) {
        console.log(response);
        alert("berhasil menghapus");
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
            <div className="col-md-4 col-sm-12">
              <div className="card" style={{ width: 400 }}>
                <img
                  className="card-img-top"
                  src={elm.url_picture}
                  alt="Card image"
                  style={{ height: 300 }}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {elm.judul}
                    <span style={{ fontWeight: 200 }}>({elm.tipe})</span>
                  </h4>
                  <p className="card-text">Pengarang : {elm.pengarang}</p>
                  <p className="card-text">Penerbit : {elm.penerbit}</p>
                  {/* <p className="card-text">Tipe : {elm.tipe}</p> */}
                  <p className="card-text">Harga : {elm.harga}</p>
                  <p className="card-text">Stok : {elm.stok}</p>
                  <Link to={"/editbuku/" + elm.id}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={e => this.hapusBuku(e, elm.id)}>
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
