import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import CategorySelector from "./CategorySelector";

export default class EditArtwork extends Component {
  constructor(props) {
    super(props);
    this.state = { artworks: {}, isLoaded: false };
    this.myRef = React.createRef();
  }

  onCategoryUpdated = (e) => {
    this.setState({ cat_id: e.target.value });
  };

  GoToUserArtwork = (e) => {
    navigate(`/user-artworks`);
  };

  componentDidMount() {
    Axios.get(`${UTILS.edit_artwork}/${this.props.id}`).then((res) => {
      this.setState({ artworks: res.data[0], isLoaded: true });
    });
  }

  EditProduct = (e) => {
    e.preventDefault();
    var formData = new FormData(this.myRef.current);
    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    Axios.put(
      `${UTILS.edit_artwork}/${this.props.id}`,
      formData,
      settings
    ).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(this.props.id);
      }
    );
  };

  render() {
    let { image, artwork_title, price } = this.state.artworks;

    return (
      <React.Fragment>
        <div>
          <h2>Edit Item</h2>
          <form onSubmit={this.EditProduct} ref={this.myRef}>
            <input
              type="text"
              placeholder="Title"
              name="artwork_title"
              defaultValue={artwork_title}
            ></input>
            <input
              type="text"
              placeholder="Price"
              name="price"
              defaultValue={price}
            ></input>

            <input type="hidden" name="cat_id" value={this.state.cat_id} />

            <CategorySelector onCategoryUpdated={this.onCategoryUpdated} />

            <div>
              <figure>
                <img
                  src={`http://localhost:9000/${image}`}
                  width="150px"
                  height="150px"
                />
              </figure>
              <input
                type="file"
                name="image"
                src={image}
                defaultValue={image}
              ></input>
            </div>

            <button type="submit" onClick={this.GoToUserArtwork}>
              Update Artwork
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
