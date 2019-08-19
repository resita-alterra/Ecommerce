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
                  <h4 className="card-title">
                    {elm.judul}
                    <span style={{ fontWeight: 200 }}>({elm.tipe})</span>
                  </h4>

                  <p className="card-text">Pengarang : {elm.pengarang}</p>
                  <p className="card-text">Penerbit : {elm.penerbit}</p>
                  {/* <p className="card-text">Tipe : {elm.tipe}</p> */}
                  <p className="card-text">Harga : {elm.harga}</p>
                  <p className="card-text">Stok : {elm.stok}</p>
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

// {props.isi.map((elm, key) => {
//     return (
//       <div>
//         <p>Ini list buku</p>
//         <p>{elm.judul}</p>
//         <p>{elm.pengarang}</p>
//         <p>{elm.penerbit}</p>
//         <p>{elm.harga}</p>
//         <p>{elm.stok}</p>
//       </div>
//     );
//   })}
