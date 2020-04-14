import React, { Component } from "react";
// import Axios from "axios";
import { navigate } from "@reach/router";

export default class PaintingButton extends Component {
  constructor(props) {
    super(props);

    console.table(this.props);
  }

  getPaintingInfo = e => {
    navigate(`/IndividualArtwork/${this.props.id}`);
  };


  render() {
    return (
      <button onClick={this.getPaintingInfo}>
        {this.props.painting_title}
      </button>
    );
  }
}
