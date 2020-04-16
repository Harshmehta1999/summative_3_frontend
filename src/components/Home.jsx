import * as React from "react";
import "../App.css";

import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import Axios from "axios";

import GlobalNav from "./GlobalNav";
import AddArtwork from "./AddArtwork";
import LoginSignup from "./LoginSignup";
import SignupPage from "./SignupPage";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedFile: null };
  }

  componentDidMount() {
    Axios.get(UTILS.categories_url).then(
      (res) => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          console.table(res.data);
          this.setState({ categories: res.data, result: true });
        }
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <GlobalNav />

        <LoginSignup />
        <AddArtwork />
      </React.Fragment>
    );
  }
}
