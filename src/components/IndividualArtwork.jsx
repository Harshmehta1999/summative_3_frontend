import React, { Component } from "react";
import Axios from "axios";
// import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";

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
        <h2>hello</h2>

        {this.state.artworks.map((artwork, i) => {
          return (
            <h2>
              {" "}
              artwork Title = {artwork.artwork_title}
              <br></br>artwork subtitle = {artwork.artwork_subtitle}
              <br></br>artworks price = {artwork.price}
              <br></br>
            </h2>
          );
        })}
      </div>
      </React.Fragment>
    );
  }
}
