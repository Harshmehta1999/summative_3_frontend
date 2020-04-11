import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import PhotographyButton from "../buttons/PhotographyButton";

import TopNav from "./TopNav";
import SubNav from "./SubNav";

export default class Photography extends Component {
  constructor(props) {
    super(props);

    this.state = { photography: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_photography_url).then(res => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ photography: res.data, result: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />

        <span>PHOTOGRAPHY</span>

        {this.state.photography.map((photography, i) => {
          return (
            <li key={photography.price}>
              <PhotographyButton
                photography_title={photography.artwork_title}
                id={photography.id}
              />
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}
