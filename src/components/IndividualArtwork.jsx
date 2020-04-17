import React, { Component } from "react";
import Axios from "axios";
// import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/individualartwork.css";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import * as UTILS from "../utils";
// import CommentButton from "./CommentButton";
import AddToCartButton from "./AddToCartButton";

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { artworks: [] };
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


  //   AddToCart = (e) => {
  //   navigate(`/cart`);
  // };

  AddComment = (e) => {
    e.preventDefault();
    alert("submitted");
    var formData = new FormData(this.formRef.current);
    Axios.post(UTILS.add_comment, formData).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />
        <div>
          {this.state.artworks.map((artwork, i) => {
            return (
              <div className="info-container">
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
        
        {/* <div>
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
</div> */}

        <div>
          <form onSubmit={this.AddComment} ref={this.formRef}>
            <textarea
              type="text"
              name="comment"
              placeholder="add comment"
            ></textarea>
            <Button
              type="submit"
              design_title={this.props.artwork_title}
              id={this.props.id}
            >
              Submit
            </Button>
          </form>
        </div>
 


      </React.Fragment>
         );
        }
      }
      

 