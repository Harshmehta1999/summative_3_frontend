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
      <div>

        <h1>Logo</h1>
        <button  onClick={this.loginpage}>Log in</button>
        <button onClick={this.signuppage}>Sign up</button>
      </div>
    );
  }
}


