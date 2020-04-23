import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/login_signup.css";
import Logo from "../images/logo.png"

export default class LoginSignup extends Component {
  loginpage = e => {
    navigate(`/menu`);
  };

  signuppage = e => {
    navigate(`/signuppage`);
  };


  render() {
    return (
    <div className="back-ground">  
      <div className="homepage">
      <img src={Logo} className="header" />  
        </div>
        <div className="button-login">
          <button className="login-bttn" onClick={this.loginpage}>
            LOG IN
          </button>
          <button
            className="signup-bttn"
            onClick={this.signuppage}
          >
            SIGN UP
          </button>
        </div>
</div>
    );
  }
}
