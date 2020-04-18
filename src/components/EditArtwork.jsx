import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import CategorySelector from "./CategorySelector";
import TopNav from "./TopNav";
import SubNav from "./SubNav"
import "../css/image.css"

export default class EditArtwork extends Component {
  constructor(props) {
    super(props);
    this.state = { artworks: {}, isLoaded: false };
    this.myRef = React.createRef();
  }

  onCategoryUpdated = e => {
    this.setState({ cat_id: e.target.value });
  };

  GoToUserArtwork = e => {
    navigate(`/user-artworks`);
  };

  componentDidMount() {
    Axios.get(`${UTILS.edit_artwork}/${this.props.id}`).then(res => {
      this.setState({ artworks: res.data[0], isLoaded: true });
    });
  }

  EditProduct = e => {
    e.preventDefault();
    var formData = new FormData(this.myRef.current);
    var settings = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    Axios.put(
      `${UTILS.edit_artwork}/${this.props.id}`,
      formData,
      settings
    ).then(
      res => {
        console.log(res);
      },
      error => {
        console.log(this.props.id);
      }
    );
  };

  render() {
    let { image, artwork_title, price, product_description } = this.state.artworks;

    return (
      <React.Fragment>
        <TopNav />
        <SubNav />
        <div>
          <span>EDIT LISTING</span>
          <form onSubmit={this.EditProduct} ref={this.myRef}>
            <CategorySelector onCategoryUpdated={this.onCategoryUpdated} />
            <input
              type="text"
              placeholder="Title"
              name="artwork_title"
              defaultValue={artwork_title}
            ></input>


            <input
              type="number"
              placeholder="Price"
              name="price"
              defaultValue={price}
            ></input>

              <textarea
              type="textarea"
              name="product_description"
              placeholder="Product Description"

              defaultValue={product_description}
              rows="5"
            />

            <input type="hidden" name="cat_id" value={this.state.cat_id} />

            <div>
              <div className="image-wrap">
              <figure>
                <img
                  className="individual-image"
                  src={`http://localhost:9000/${image}`}
                  width="150px"
                  height="250px"
                />
              </figure></div>
              <input
                type="file"
                name="image"
                src={image}
                defaultValue={image}
              ></input>
            </div>

            <div className="submit">
              <button
                className="submit-button"
                type="submit"
                onClick={this.GoToUserArtwork}
              >
                DONE
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
