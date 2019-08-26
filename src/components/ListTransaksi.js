import React from "react";

function ListTransaksi(props) {
  if (props.sebagai === "penjual") {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Judul</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Pembeli</th>
              <th>Kontak</th>
              <th>Status</th>
            </tr>
            {props.isi.map((elm, key) => {
              return (
                <tr>
                  <td>{elm.id}</td>
                  <td>{elm.judul_buku}</td>
                  <td>{elm.harga_satuan}</td>
                  <td>{elm.jumlah}</td>
                  <td>{elm.total_harga}</td>
                  <td>{elm.pembeli_name}</td>
                  <td>{elm.kontak_pembeli}</td>
                  <td>{elm.status}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Judul</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Penjual</th>
              <th>Kontak</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.isi.map((elm, key) => {
              return (
                <tr>
                  <td>{elm.id}</td>
                  <td>{elm.judul_buku}</td>
                  <td>{elm.harga_satuan}</td>
                  <td>{elm.jumlah}</td>
                  <td>{elm.total_harga}</td>
                  <td>{elm.penjual_name}</td>
                  <td>{elm.kontak_penjual}</td>
                  <td>{elm.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTransaksi;
