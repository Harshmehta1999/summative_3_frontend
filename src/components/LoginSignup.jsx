import React, { Component } from "react";

import { navigate } from "@reach/router";

export default class LoginSignup extends Component {

    loginpage = (e) => {
    navigate(`/`);
  };

  signuppage = (e) => {
    navigate(`/signuppage`);
  }; 
  render() {
    return (
      <div className="Homepage">

        <h1>Logo</h1>
        <button className="btn btn-primary btn-wide" onClick={this.loginpage}>Log in</button>
        <button className="btn btn-secondary btn-wide" onClick={this.signuppage}>Sign up</button>
      </div>
    );
  }
}


