import React, { Component } from "react";
// import Axios from "axios";
import { navigate } from "@reach/router";

export default class UserArtworkButton extends Component {
  constructor(props) {
    super(props);

    console.table(this.props);
  }

  getArtworkInfo = (e) => {
    navigate(`/UserArtworkInfo/${this.props.id}`);
  };

  render() {
    return (
      <button onClick={this.getArtworkInfo}>{this.props.artwork_title}</button>
    );
  }
}
