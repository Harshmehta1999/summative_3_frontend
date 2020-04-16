import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";

export default class UserArtworkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [],
    };
  }

  gotoEdit = (e) => {
    navigate(`/edit-details/${this.props.id}`);
  };

  componentDidMount() {
    Axios.get(`${UTILS.artworks_url}/${this.props.id}`).then((res) => {
      console.table(res.data);
      this.setState({
        artworks: res.data,
      });
    });
  }

  removeArtwork = (evt) => {
    var index = evt.target.getAttribute("data-uuid");
    console.table(this.state.items);
    Axios.delete(`${UTILS.artworks_url}/${this.props.id}`).then((res) => {
      console.log(res.data);
      navigate(`/user-artworks`);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.artworks.map((artwork, i) => {
            return (
              <React.Fragment key={i}>
                <h2>{artwork.title}</h2>

                <div>
                  <h3>Price: {artwork.price}</h3>
                  <h3>Artwork title = {artwork.artwork_title}</h3>
                  <img
                    src={`http://localhost:9000/${artwork.image}`}
                    alt="img"
                  />
                </div>

                <div>
                  <button _id={artwork._id} onClick={this.removeArtwork}>
                    Delete
                  </button>
                  <button onClick={this.gotoEdit}>Edit</button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
