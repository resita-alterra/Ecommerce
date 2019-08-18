import React from "react";

function ListBuku(props) {
  return (
    <div>
      <p>Ini list buku</p>
      <p>{props.isi.judul}</p>
      <p>{props.isi.pengarang}</p>
      <p>{props.isi.penerbit}</p>
      <p>{props.isi.harga}</p>
      <p>{props.isi.stok}</p>
    </div>
  );
}

export default ListBuku;
