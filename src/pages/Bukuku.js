import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPost from "./../components/HeaderPost";
import axios from "axios";
import ListBukuEdit from "./../components/ListBukuEdit";

class Bukuku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buku: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;
    axios
      .get(self.props.baseUrl + "/bacaan", {
        headers: { Authorization: "Bearer " + self.props.token }
      })
      .then(function(response) {
        let hasil = response.data;
        self.setState({ buku: hasil });
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
              <ListBukuEdit
                isi={this.state.buku}
                refresh={this.componentDidMount}
              />
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
)(Bukuku);
