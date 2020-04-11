import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import PaintingButton from "../buttons/PaintingButton";
import TopNav from "./TopNav";
import SubNav from "./SubNav";

export default class Painting extends Component {
  constructor(props) {
    super(props);

    this.state = { painting: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_painting_url).then(res => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ painting: res.data, result: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />

        <span>PAINTINGS</span>

        {this.state.painting.map((painting, i) => {
          return (
            <li key={painting.price}>
              <PaintingButton
                painting_title={painting.artwork_title}
                id={painting.id}
              />
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}
