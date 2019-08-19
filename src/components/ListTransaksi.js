import React from "react";
import { Link } from "react-router-dom";

function ListTransaksi(props) {
  if (props.sebagai === "penjual") {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Id Buku</th>
              <th>Harga Satuan</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Kontak Pembeli</th>
              <th>Status</th>
            </tr>
            {props.isi.map((elm, key) => {
              return (
                <tr>
                  <td>{elm.id}</td>
                  <td>{elm.buku_id}</td>
                  <td>{elm.harga_satuan}</td>
                  <td>{elm.jumlah}</td>
                  <td>{elm.total_harga}</td>
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
              <th>Id Buku</th>
              <th>Harga Satuan</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Kontak Penjual</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.isi.map((elm, key) => {
              return (
                <tr>
                  <td>{elm.id}</td>
                  <td>{elm.buku_id}</td>
                  <td>{elm.harga_satuan}</td>
                  <td>{elm.jumlah}</td>
                  <td>{elm.total_harga}</td>
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
