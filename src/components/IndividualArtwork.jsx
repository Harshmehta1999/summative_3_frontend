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

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);

    let u = window.localStorage.getItem("user") || "User name";

    this.formRef = React.createRef();
    this.state = { artworks: [], data: "", comments: [], user: u };
    this.commentsField = React.createRef();
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/api/artworks/${this.props.id}`).then(
      (res) => {
        console.log(res.data);
        this.setState({ artworks: res.data, comments: res.data[0].comments });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  addComments = (e) => {
    let comment = this.commentsField.current.value;

    let id = this.state.items[0].id;

    Axios.post(`${UTILS.add_comment}`, {
      comment: comment,
      id: id,
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log("error for ", this.props.id);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <TopNav title={this.state.user} />
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

          <div>
            <input type="textarea" ref={this.commentsField}></input>

            <button onClick={this.addComments}>Send</button>

            <div>
              {this.state.comments.map((comment, i) => {
                return (
                  <p key={i} className="dark">
                    {comment.comment}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
