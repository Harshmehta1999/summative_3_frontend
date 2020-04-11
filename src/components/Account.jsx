import React, { Component } from "react";
// import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav"
import "../css/menu.css"
import AddArtwork from "./AddArtwork";


export default class Account extends Component {
  componentDidMount() {}


    
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />
        <AddArtwork />

        <span>ACCOUNT</span>

      </React.Fragment>
    );
  }
}
