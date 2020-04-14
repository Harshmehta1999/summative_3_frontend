import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/edituserprofile.css";

export default class Profile extends Component {
  constructor() {
    super();

    let u = window.localStorage.getItem("user") || "User name";
    let e = window.localStorage.getItem("email") || "Email";
    let p = window.localStorage.getItem("phone") || "Phone";

    this.state = {
      data: "",
      user: u,
      email: e,
      phone: p
    };
  }

  gotoUserEdit = e => {
    navigate("/edit-userprofile-page");
  };

  render() {
    return (
      <React.Fragment>
        <div>
            <div className="info">
              <p>{this.state.user}</p>
              <p>{this.state.email}</p>
              <p>{this.state.phone}</p>
            </div>

        <div className="submit">
          <button onClick={this.gotoUserEdit} className="submit-button">
            EDIT PROFILE
          </button></div>
        </div>
      </React.Fragment>
    );
  }
}
