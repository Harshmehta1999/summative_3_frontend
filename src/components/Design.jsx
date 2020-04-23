import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/categories.css";
import "bootstrap/dist/css/bootstrap.css";

{
  /* Data put in by Harsh */
}
{
  /* CSS, divs/containers, cards done by Demi */
}

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = { design: [] };
  }

  getDesignInfo = (id) => {
    navigate(`/IndividualArtwork/${id}`);
  };

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
        <TopNav title="DESIGN" />
        <SubNav />

        <div className="container">
          {this.state.design.map((design, i) => {
            return (
              <div className="card" data-id={design.id}>
                <div className="card-img-top-box wrap">
                  <img
                    src={`http://localhost:9000/${design.image}`}
                    className="card-img-top"
                    onClick={() => {
                      this.getDesignInfo(design.id);
                    }}
                    alt="img"
                  />
                </div>
                <div className="card-body">
                  <span className="card-title">{design.artwork_title}</span>

                  <h6 className="card-subtitle">{design.artwork_subtitle}</h6>
                  <p className="card-price">${design.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
