import React, { Component } from "react";
import { navigate } from "@reach/router";
import search from "../images/search-bar.png";
import leftArrow from "../images/left_arrow.png";
import "../css/topnav.css";

export default class TopNav extends Component {
  componentDidMount() {}

  goBack = (e) => {
    alert(123);
    navigate(-1);
  };

  goSearch = (e) => {
    navigate(`/search`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="top-nav">
          <img
            src={leftArrow}
            alt="search"
            className="arrow-top"
            onClick={this.goBack}
          />
          <h3></h3>
          <div className="search-wrapper">
            {/* <img
              src={search}
              onClick={this.goSearch}
              alt="search-bar"
              className="search-bar"
            /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
