import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";
import ListTransaksi from "../components/ListTransaksi";

class Transaksiku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      penjual: [],
      pembeli: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(self.props.baseUrl + "/transaksi/semua", {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {
        let hasil1 = response.data.penjual;
        self.setState({ penjual: hasil1 });
        let hasil2 = response.data.pembeli;
        self.setState({ pembeli: hasil2 });
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <HeaderPost />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>sebagai penjual</p>
              <ListTransaksi isi={this.state.penjual} sebagai="penjual" />
              <p>sebagai pembeli</p>
              <ListTransaksi isi={this.state.pembeli} sebagai="pembeli" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  "is_login,identitas,token,baseUrl",
  actions
)(Transaksiku);
