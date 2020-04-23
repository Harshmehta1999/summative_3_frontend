import React, { Component } from "react";
import Axios from "axios";
// import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/individualartwork.css";

import { Button } from "reactstrap";
import * as UTILS from "../utils";
// import CommentButton from "./CommentButton";
import AddToCartButton from "./AddToCartButton";


{/* Data put in by Harsh */}
{/* CSS, divs/containers, cards done by Demi */}

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);

    let u = window.localStorage.getItem("user") || "User name";
    
    this.formRef = React.createRef();
    this.state = { artworks: [],
      data: "",
      user: u };
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

  //   AddToCart = (e) => {
  //   navigate(`/cart`);
  // };

  AddComment = e => {
    e.preventDefault();
    alert("submitted");
    var formData = new FormData(this.formRef.current);
    Axios.post(UTILS.add_comment, formData).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <React.Fragment>
        <TopNav title={this.state.user}/>
        <SubNav />
{/* 
        <span className="user-name">{this.state.user}</span> */}

        <div>
          <div className="artist-page">
            {this.state.artworks.map((artwork, i) => {
              return (
                <div className="info-container">
                  {" "}
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
                </div>
              );
            })}
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

          {/* <div>
        {this.state.artworks.map((artx=works, i) => {
                return (
                  <li>
                    <AddToCartButton
                      artworks_title={artworks.artwork_title}
                      id={artworks.id}
                    />
                  </li>
                );
              })}
</div> */}

          <div className="comment">
            <form onSubmit={this.AddComment} ref={this.formRef}>
              <textarea
                type="text"
                name="comment"
                placeholder="Send a comment here..."
              ></textarea>

              <Button
                className="comment-button"
                type="submit"
                design_title={this.props.artwork_title}
                id={this.props.id}
              >
                ADD COMMENT
              </Button>
            </form>
          </div>

          {/* {this.state.artworks.map((artwork, i) => {
            return (
              <div className="product-footer">
              <div className="price"><p className="artwork-price">${artwork.price}</p></div>
              <div className="buttons">
                <button className="wish-bttn">ADD TO WISHLIST</button>
                <button className="cart-bttn">ADD TO CART</button>
              </div></div>
            );
          })} */}
        </div>
      </React.Fragment>
    );
  }
}
