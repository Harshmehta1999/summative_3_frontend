import React, { Component } from "react";
// import Axios from "axios";
import { navigate } from "@reach/router";
import "../css/categories.css"

export default class UserArtworkButton extends Component {
  constructor(props) {
    super(props);

    console.table(this.props);
  }

  getArtworkInfo = e => {
    navigate(`/UserArtworkInfo/${this.props.id}`);
  };

  render() {
    return (
      <h6 onClick={this.getArtworkInfo}>
      {this.props.artwork_title}
      </h6>
    );
  }
}
