import React, { Component } from "react";
import { navigate } from "@reach/router";
import search from '../images/search.png';
import leftArrow from "../images/left_arrow.png";
import "../css/topnav.css"





export default class TopNav extends Component {
  componentDidMount() {}



  render() {
    return (
      <React.Fragment>
 

        <div className="top-nav">
        <img src={leftArrow} alt="search" className="arrow-top" />
<h3 />
        <img src={search} alt="search" className="search-top" />

        </div>

      </React.Fragment>
    );
  }
}