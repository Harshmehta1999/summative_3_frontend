import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import PhotographyButton from "../buttons/PhotographyButton";
import TopNav from "./TopNav";
import SubNav from "./SubNav";
import "../css/categories.css";

// Page set up by Harsh
// Data being called from server and events done by Harsh

export default class Photography extends Component {
  constructor(props) {
    super(props);

    this.state = { photography: [] };
  }

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
        <TopNav title="PHOTOGRAPHY" />
        <SubNav />

{/* Data put in by Harsh */}
{/* CSS, divs/containers, cards done by Demi */}

        <div className="container">
          {this.state.photography.map((photography, i) => {
            return (
              <div className="card">
                <div className="card-img-top-box wrap">
                  <img
                    src={`http://localhost:9000/${photography.image}`}
                    class="card-img-top"
                    alt="product"
                  />
                </div>
                <div className="card-body">
                  <PhotographyButton
                    className="card-title"
                    photography_title={photography.artwork_title}
                    id={photography.id}
                  />
                  <h6 className="card-subtitle">
                    {photography.artwork_subtitle}
                  </h6>
                  <p className="card-price">${photography.price} </p>
                  {/* <img src={Heart} className="favourites" alt="faveourites"/> */}
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
