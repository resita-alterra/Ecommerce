import React from "react";
import { Link } from "react-router-dom";

function MenuSamping() {
  let kategori = ["novel", "komik", "pelajaran", "sejarah", "agama", "umum"];
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            Kategori :
          </a>
        </div>
        <ul class="nav navbar-nav">
          {kategori.map((elm, key) => {
            return (
              <li style={{ marginLeft: 10, padding: 15, fontSize: 18 }}>
                {elm}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default MenuSamping;
