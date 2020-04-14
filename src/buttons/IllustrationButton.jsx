import React, { Component } from "react";
// import Axios from "axios";
import { navigate } from "@reach/router";

export default class DesignButton extends Component {
  constructor(props) {
    super(props);

    console.table(this.props);
  }

  getIllustrationInfo = e => {
    navigate(`/IndividualArtwork/${this.props.id}`);
  };

  render() {
    return (
      <button onClick={this.getIllustrationInfo}>
        {this.props.illustration_title}
      </button>
    );
  }
}
