import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import axios from "axios";

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.cobaGet = this.cobaGet.bind(this);
  }

  cobaGet = e => {
    e.preventDefault();

    axios
      .get({ url: "localhost:6000/dummy" })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.cobaGet(e);
          }}
        >
          geteeeee
        </button>
      </div>
    );
  }
}

export default Dummy;
