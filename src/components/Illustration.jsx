import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import IllustrationButton from "../buttons/IllustrationButton.jsx";
import TopNav from "./TopNav";
import SubNav from "./SubNav";

export default class Illustration extends Component {
  constructor(props) {
    super(props);

    this.state = { illustration: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_illustration_url).then(res => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ illustration: res.data, result: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />

        <span>ILLUSTRATION</span>

        <div className="container">
          {this.state.illustration.map((illustration, i) => {
            return (
              <div className="card">
                <div className="card-img-top-box wrap">
                  <img
                    src={`http://localhost:9000/${illustration.image}`}
                    class="card-img-top"
                    alt="product-image"
                  />
                </div>
                <div className="card-body">
                  <IllustrationButton
                    className="card-title"
                    illustration_title={illustration.artwork_title}
                    id={illustration.id}
                  />
                  <h6 className="card-subtitle">
                    {illustration.artwork_subtitle}
                  </h6>
                  <p className="card-price">${illustration.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
