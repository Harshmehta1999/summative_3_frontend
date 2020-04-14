import React, { Component } from "react";
import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/menu.css";
// import AddArtwork from "./AddArtwork";
import Profile from "./Profile"

export default class Account extends Component {
  componentDidMount() {}

  goAddArtwork = e => {
    navigate(`/addartwork`);
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />

        <Profile />

        <div className="submit">
          <button
            className="submit-bttn"
            type="submit"
            onClick={this.goAddArtwork}
          >
            LIST ITEM
          </button>
        </div>

        <span>ACCOUNT</span>
      </React.Fragment>
    );
  }
}
