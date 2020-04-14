import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";
import CategorySelector from "./CategorySelector";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/addartwork.css";

export default class AddArtwork extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { categories: [], selected_id: null };
  }

  onCategoryUpdated = e => {
    this.setState({ cat_id: e.target.value });
  };

  AddArtwork = e => {
    e.preventDefault();

    var formData = new FormData(this.formRef.current);
    // formData.append("_id",Date.now())

    Axios.post(UTILS.add_artwork, formData).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <React.Fragment>        
        <TopNav />


        <span>ADD PRODUCT</span>

        <div className="form-wrapper">
          <form onSubmit={this.AddArtwork} ref={this.formRef}>
            <CategorySelector onCategoryUpdated={this.onCategoryUpdated} />

            {/* <label>ARTWORK TITLE</label> */}
            <input type="text" name="artwork_title" placeholder="Title" />
            {/* 
          <label>Artwork Subtitle</label> */}
            <input type="text" name="artwork_subtitle" placeholder="Subtitle" />
            {/* 
          <label>Price</label> */}
            <input type="text" name="price" placeholder="Price" />

            <textarea
              type="textarea"
              name="product-description"
              placeholder="Product Description"
              rows="5"
            />

            <input type="hidden" name="cat_id" value={this.state.cat_id} />

            <div className="submit">
              <Button className="submit-button" type="submit">
                LIST ITEM
              </Button>
            </div>
          </form>
        </div>
        <SubNav />
      </React.Fragment>
    );
  }
}
