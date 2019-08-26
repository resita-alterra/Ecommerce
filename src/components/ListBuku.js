import React from "react";
import { Link } from "react-router-dom";

function ListBuku(props) {
  return (
    <div className="row">
      {props.isi.map((elm, key) => {
        let tujuan = "/buku/" + elm.id;
        return (
          <div className="col-md-4 col-sm-12" style={{ marginBottom: 20 }}>
            <Link to={tujuan} style={{ textDecoration: "none" }}>
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
                  <p className="card-title">
                    {elm.judul}
                    <span style={{ fontWeight: 200 }}>({elm.tipe})</span>
                  </p>

                  <p className="card-text">Pengarang : {elm.pengarang}</p>
                  <p className="card-text">Penerbit : {elm.penerbit}</p>
                  <p className="card-text">Harga : {elm.harga}</p>
                  <p className="card-text">Stok : {elm.stok}</p>
                  <p className="card-text">Penjual : {elm.user_name}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListBuku;
