import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import * as UTILS from "../utils";
import CommentButton from "./CommentButton";

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { artworks: [],  };
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


  AddComment = e => {
    e.preventDefault();
    alert("submitted")
    var formData = new FormData(this.formRef.current);
    // formData.append("_id",Date.now())
    Axios.post(UTILS.add_comment, formData).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <h2>helloss</h2>

        {this.state.artworks.map((artwork, i) => {
          return (
            <h2>
      
              artwork Title = {artwork.artwork_title}
              <br></br>artwork subtitle = {artwork.artwork_subtitle}
              <br></br>artworks price = {artwork.price}
              <br></br>
            </h2>
          );
        })}

        <div className="comment-wrapper">
          <form onSubmit={this.AddComment} ref={this.formRef}>
            <textarea
              type="text"
              name="artwork_title"
              placeholder="title"
            ></textarea>
            <Button type="submit"  design_title={this.props.artwork_title} id={this.props.id}>Submit</Button>
            {/* <CommentButton artwork_title={artwork.artwork_title} id={artwork.id} /> */}
          </form>
        </div>
      </div>
    );
  }
}
