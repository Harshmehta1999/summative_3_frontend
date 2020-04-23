import React, { Component } from "react";
import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/menu.css";
import "../css/edituserprofile.css"
import Profile from "./Profile"
import UserArtworkButton from "./UserArtworkButton";


{/* Data put in by Harsh */}
{/* CSS, divs/containers, cards done by Demi */}

export default class Account extends Component {
  componentDidMount() {}

  goAddArtwork = e => {
    navigate(`/addartwork`);
  };

  goUserArtwork = e => {
    navigate(`/user-artworks`)
  }

  render() {
    return (
      <React.Fragment>
        <TopNav title="ACCOUNT"/>
        <SubNav />

        <Profile />

        <div className="submit">
          <button
            className="submit-bttn"
            type="submit"
            onClick={this.goAddArtwork}
          >
            LIST AN ITEM
          </button>
        </div>

      <div className="submit">
      <button
      className="user-bttn"
      type="submit"
      onClick={this.goUserArtwork}
    >
        LISTINGS
      </button>

      </div>

      </React.Fragment>
    );
  }
}
