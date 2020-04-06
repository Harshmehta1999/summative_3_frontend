import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";
import CategorySelector from "./CategorySelector";

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
    // formData.append("cat_id",Date.now())

    Axios.post(UTILS.add_artwork, formData).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.AddArtwork} ref={this.formRef}>
          
          <CategorySelector onCategoryUpdated={this.onCategoryUpdated} />
          <label>Artwork Title</label>
          <input type="text" name="artwork_title" placeholder="title" />

          <label>Artwork Subtitle</label>
          <input type="text" name="artwork_subtitle" placeholder="subtitle" />

          <label>Price</label>
          <input type="text" name="price" placeholder="price" />

          <input type="hidden" name="cat_id" value={this.state.cat_id} />

          
          <Button type="submit">Submit</Button>
          
        </form>
      </div>
    );
  }
}
