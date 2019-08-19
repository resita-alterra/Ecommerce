import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./../store";
import HeaderPra from "./../components/HeaderPra";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: ""
    };
    this.setUser = this.setUser.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  setUser(e) {
    this.setState({ user_name: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }

  async handleLogin(e) {
    console.log(this.state);
    e.preventDefault();
    let self = this;
    await axios
      .get(self.props.baseUrl + "/login", {
        params: {
          user_name: self.state.user_name,
          password: self.state.password
        }
      })
      .then(function(response) {
        let token = response.data.token;
        self.props.setToken(token);
        self.props.login();

        self.props.history.push("/profile");
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <HeaderPra />
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 form-group"
              style={{ border: "dotted grey 2px", padding: 50 }}
            >
              <form>
                <label for="user">Username : </label>
                <input
                  type="text"
                  id="user"
                  onChange={this.setUser}
                  className="form-control"
                />
                <br />
                <label for="pass">Password :</label>
                <input
                  type="password"
                  id="pass"
                  onChange={this.setPassword}
                  className="form-control"
                />
                <br />
                <button
                  onClick={this.handleLogin}
                  className="form-control btn-info"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login,baseUrl,identitas,token",
  actions
)(Login);
