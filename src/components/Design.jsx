import React, { Component } from "react";
import GlobalNav from "./GlobalNav";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import DesignButton from "./DesignButton";

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = { design: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_design_url).then((res) => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ design: res.data, result: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalNav />

        {this.state.design.map((design, i) => {
          return (
            <li key={design.price}>
              <DesignButton
                design_title={design.artwork_title}
                id={design.id}
              />
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}
