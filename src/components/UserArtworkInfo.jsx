import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/individualartwork.css"

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


        <TopNav />
        <SubNav />
        <div className="artwork-page">
          {this.state.artworks.map((artwork, i) => {
            return (
              <React.Fragment key={i}>


<div className="info-container">
                  <div className="image">
                    <img
                      src={`http://localhost:9000/${artwork.image}`}
                      alt="img"
                      // onClick={this.productDisplay}
                    />
                  </div>
                  <div className="artist-info">
                    <h6 className="artwork-title">{artwork.artwork_title}</h6>
                    <div className="artwork-subtitle">
                      {artwork.artwork_subtitle}
                    </div>
                    <p className="artwork-price">${artwork.price}</p>
                  </div>
          
                
                
          <div className="product">
            {this.state.artworks.map((artwork, i) => {
              return (
                <div className="description">
                  <p className="description-title">PRODUCT DESCRIPTION</p>
                  <p className="artwork-description">
                    {artwork.product_description}
                  </p>
                </div>
              );
            })}
          </div>


          <div className="buttons">
                  <button _id={artwork._id} onClick={this.removeArtwork} className="remove-bttn">
                    REMOVE LISTING
                  </button>
                  <button onClick={this.gotoEdit} className="edit-bttn">EDIT LISTING</button>
                </div>  
                
                 </div>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
