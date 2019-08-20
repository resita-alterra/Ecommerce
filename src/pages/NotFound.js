import React from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import HeaderPra from "./../components/HeaderPra";
import HeaderPost from "./../components/HeaderPost";
import HeaderAdmin from "./../components/HeaderAdmin";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let header = null;
    if (
      this.props.is_login == true &&
      this.props.identitas.user_name == "admin"
    ) {
      header = <HeaderAdmin />;
    } else if (this.props.is_login == true) {
      header = <HeaderPost />;
    } else {
      header = <HeaderPra />;
    }

    console.log(this.props);

    return (
      <div>
        {header}
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See-760x400.png" />
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, identitas",
  actions
)(NotFound);
