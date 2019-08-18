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
      })
      .catch(function(error) {
        console.log(error);
      });

    self.props.login();
  }

  render() {
    return (
      <div>
        <HeaderPra />
        <div>
          <form>
            <label for="user">Username : </label>
            <input type="text" id="user" onChange={this.setUser} />
            <br />
            <label for="pass">password</label>
            <input type="password" id="pass" onChange={this.setUser} />
            <Link to="/profile">
              <button onClick={this.props.login}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login,baseUrl,identitas,token",
  actions
)(Login);
