import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import { Link } from "@reach/router";
import * as UTILS from "../utils";
import CommentButton from "./CommentButton";
import AddToCartButton from "./AddToCartButton";

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { artworks: [],comments: [], };
    this.commentsField = React.createRef();
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/api/artworks/${this.props.id}`).then(
      (res) => {
        console.log(res.data);
        this.setState({ artworks: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  addComment = (e) => {
    let comment = this.commentsField.current.value;
    let id = this.state.artworks[0].id;

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
      <div>
        <h2>helloss</h2>

        {this.state.artworks.map((artwork, i) => {
          return (
            <div>
              <h2>
                artwork Title = {artwork.artwork_title}
                <br></br>artwork subtitle = {artwork.artwork_subtitle}
                <br></br>artworks price = {artwork.price}
                <br></br>{" "}
                <img src={`http://localhost:9000/${artwork.image}`} alt="img" />
              </h2>
              {this.state.artworks.map((artworks, i) => {
                return (
                  <li>
                    <AddToCartButton
                      artworks_title={artworks.artwork_title}
                      id={artworks.id}
                    />
                  </li>
                );
              })}
            </div>
          );
        })}

        <div>
          <h3>Leave a comment</h3>

          <input type="textarea" ref={this.commentsField}></input>

          <button onClick={this.addComment}>Send</button>

          <div className="comment">
            {this.state.comments.map((comment, i) => {
              return <p key={i}>{comment.comment}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
