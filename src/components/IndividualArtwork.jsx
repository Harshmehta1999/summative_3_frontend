import React, { Component } from "react";
import Axios from "axios";
// import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/individualartwork.css";

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);

    this.state = { artworks: [] };
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/api/artworks/${this.props.id}`).then(
      res => {
        console.log(res.data);
        this.setState({ artworks: res.data });
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />
        <div>
          {this.state.artworks.map((artwork, i) => {
            return (
              <div className="container">
                {" "}
                <div className="image">
                <img
                  src={`http://localhost:9000/${artwork.image}`}
                  alt="img"
                  // onClick={this.productDisplay}
                /></div>
                <div className="artist-info">
                <h6 className="artwork-title">{artwork.artwork_title}</h6>
                <div className="artwork-subtitle">{artwork.artwork_subtitle}</div>
                <p className="artwork-price">${artwork.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
