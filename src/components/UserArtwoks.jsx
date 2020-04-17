import React, { Component } from "react";
import GlobalNav from "./GlobalNav";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import UserArtworkButton from "./UserArtworkButton";

export default class UserArtwoks extends Component {
  constructor(props) {
    super(props);

    this.state = { artworks: [] };
  }

  componentDidMount() {
    Axios.get(UTILS.artworks_url).then((res) => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ artworks: res.data, result: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalNav />

        {this.state.artworks.map((artworks, i) => {
          return (
            <li>
              <UserArtworkButton
                artwork_title={artworks.artwork_title}
                id={artworks.id}
              />
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}
