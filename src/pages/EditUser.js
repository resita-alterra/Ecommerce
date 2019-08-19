import React from "react";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderAdmin from "./../components/HeaderAdmin";
import axios from "axios";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orang: []
    };
    this.hapusUser = this.hapusUser.bind(this);
  }

  componentDidMount() {
    const self = this;

    axios
      .get(self.props.baseUrl + "/user/admin")
      .then(function(response) {
        let hasil = response.data;
        self.setState({ orang: hasil });
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.orang !== this.state.orang) {
  //     const self = this;

  //     axios
  //       .get(self.props.baseUrl + "/user/admin")
  //       .then(function(response) {
  //         let hasil = response.data;
  //         self.setState({ orang: hasil });
  //         console.log(self.state);
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //         alert(error);
  //       });
  //   }
  // };

  hapusUser(e, id) {
    const self = this;
    e.preventDefault();
    axios
      .delete(self.props.baseUrl + "/user/" + id)
      .then(function(response) {
        console.log(response);
        self.componentDidMount();
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <HeaderAdmin />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p
                style={{ display: "block", textAlign: "center", fontSize: 25 }}
              >
                USERS
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Alamat</th>
                    <th>Rekening</th>
                    <th>Kontak</th>
                    <th>Email</th>
                    <th>Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orang.map((elm, key) => {
                    return (
                      <tr>
                        <td>{elm.id}</td>
                        <td>{elm.user_name}</td>
                        <td>{elm.alamat}</td>
                        <td>{elm.ktp}</td>
                        <td>{elm.hp}</td>
                        <td>{elm.email}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={e => this.hapusUser(e, elm.id)}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "baseUrl, is_login, identitas, token",
  actions
)(EditUser);
