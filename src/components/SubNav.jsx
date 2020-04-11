import React, { Component } from "react";
import home from "../images/home.png";
import search from "../images/search.png";
import shopping from "../images/shopping.png";
import heart from "../images/heart.png";
import account from "../images/account.png";
import { navigate } from "@reach/router";
import "../css/subnav.css";

export default class SubNav extends Component {
  goHome = e => {
    navigate(`/creativecorner`);
  };

  goMenu = e => {
    navigate(`/menu`);
  };

  goAccount = e => {
    navigate(`/account`);
  };

  render() {
    return (
      <div className="nav-bar">
        <footer>
          <img src={home} alt="home" className="home icon" onClick={this.goHome} />

          <img
            src={search}
            alt="search"
            className="search-bottom icon"
            onClick={this.goMenu}
          />

          <img src={shopping} alt="shopping" className="shopping icon" />

          <img src={heart} alt="heart" className="heart icon" />

          <img
            src={account}
            alt="account"
            className="account icon"
            onClick={this.goAccount}
          />
        </footer>
      </div>
    );
  }
}
