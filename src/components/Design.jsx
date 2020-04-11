import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import DesignButton from "../buttons/DesignButton";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "bootstrap/dist/css/bootstrap.css";
import "../css/categories.css";
export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = { design: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_design_url).then(res => {
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
        <TopNav />
        <SubNav />
        <span>DESIGNS</span>

        {this.state.design.map((design, i) => {
          return (
            <div className="container">
              <div className="card">
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className="card-body">
                  <h6 className="card-title">{design.artwork_title}</h6>
                  <h6 className="card-subtitle">{design.artwork_subtitle}</h6>
                  <p className="card-price">${design.price}</p>
                  <a href="#" class="btn btn-primary"></a>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
