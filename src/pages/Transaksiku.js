// self.props.match.params.genre
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";

class Bukuku extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }

  componentDidMount() {
    const self = this;
    axios
      .get(self.props.baseUrl + "/transaksi/semua", {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {});
  }

  render() {
    return <div>bwalahumba</div>;
  }
}
