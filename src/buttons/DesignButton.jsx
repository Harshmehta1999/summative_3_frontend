import React, { Component } from "react";
// import Axios from "axios";
import { navigate } from "@reach/router";
import "../css/categories.css"

export default class DesignButton extends Component {
  constructor(props) {
    super(props);

    console.table(this.props);
  }

  getDesignInfo = e => {
    navigate(`/IndividualArtwork/${this.props.id}`);
  };

  

  render() {
    return (
      <h6 onClick={this.getDesignInfo}>
      {this.props.design_title}</h6>
    );
  }
}
