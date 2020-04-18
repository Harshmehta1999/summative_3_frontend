import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import UserArtworkButton from "./UserArtworkButton";
import TopNav from "./TopNav";
import SubNav from "./SubNav";
import "../css/categories.css";

export default class UserArtwoks extends Component {
  constructor(props) {
    super(props);

    let u = window.localStorage.getItem("user") || "User name";
    this.state = { artworks: [],
      data: "",
      user: u
    };
  }

  

  componentDidMount() {
    Axios.get(UTILS.artworks_url).then(res => {
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
        <SubNav />
        <TopNav />

        <span className="user-name">{this.state.user}</span>

        <div className="container">
        {this.state.artworks.map((artworks, i) => {
          return (
            <div className="card">
              <div className="card-img-top-box wrap">
                <img
                  src={`http://localhost:9000/${artworks.image}`}
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <UserArtworkButton
                  className="card-title"
                  artworks_title={artworks.artwork_title}
                  id={artworks.id}
                />
                <h6 className="card-subtitle">{artworks.artwork_subtitle}</h6>
                // <p className="card-price">${artworks.price}</p>
              </div>
            </div>
          );
        })}

        </div>
      </React.Fragment>
    );
  }
}
