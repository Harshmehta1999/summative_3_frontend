import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import UserArtworkButton from "./UserArtworkButton";
import TopNav from "./TopNav";
import SubNav from "./SubNav";
import "../css/categories.css";
import "bootstrap/dist/css/bootstrap.css";

// Page set up by Harsh
// Data being called from server and events done by Harsh

export default class UserArtwoks extends Component {
  constructor(props) {
    super(props);

    let u = window.localStorage.getItem("user") || "User name";
    this.state = { artworks: [],
      data: "",
      user: u
    };
  }

  

  getProductInfo = e => {
    navigate(`/IndividualArtwork/${this.state.artworks[0].id}`)

  };

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
        <TopNav title={this.state.user}/>


{/* Data put in by Harsh */}
{/* CSS, divs/containers, cards display done by Demi */}


        <div className="container">
        {this.state.artworks.map((artworks, i) => {
          return (
            <div className="card">
              <div className="card-img-top-box wrap">
                <img
                  src={`http://localhost:9000/${artworks.image}`}
                  className="card-img-top"
                  onClick={this.getProductInfo}
                />
              </div>
              <div className="card-body">
             <span
                  className="card-title">
                  {artworks.artwork_title}</span>
      
               <h6 className="card-subtitle">{artworks.artwork_subtitle}</h6>
                <p className="card-price">${artworks.price}</p>
              </div>
            </div>
          );
        })}

        </div>
      </React.Fragment>
    );
  }
}
