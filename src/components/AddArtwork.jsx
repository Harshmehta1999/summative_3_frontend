import React, { Component } from "react";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import CategorySelector from "./CategorySelector";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/addartwork.css";
import Axios from "axios";

{/* Data put in by Harsh */}
{/* CSS, divs/containers, cards done by Demi */}

export default class AddArtwork extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { categories: [], selected_id: null, id: Date.now() };
  }

  AddArtwork = (e) => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);
    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    console.log(">>> FORMDATA ", formData);
    Axios.post(UTILS.add_artwork, formData, settings)
      .then((res) => {
        console.log(res);
        // navigate(`/artworks/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onCategoryUpdated = (e) => {
    this.setState({ cat_id: e.target.value });
  };

  goListings = (e) => {
    navigate(`/user-artworks`);
  }

  render() {
    return (
      <React.Fragment>        
        <TopNav title="ADD PRODUCT" />


        <div className="form-wrapper">
          <form onSubmit={this.AddArtwork} ref={this.formRef}>
            <CategorySelector onCategoryUpdated={this.onCategoryUpdated} />

          
            <input type="text" name="artwork_title" placeholder="Title" />
         
            <input type="text" name="artwork_subtitle" placeholder="Subtitle" />
  
            <input type="number" name="price" placeholder="Price" />

            

            <textarea
              type="textarea"
              name="product_description"
              placeholder="Product Description"
              rows="5"
            />

<input type="file" name="image"></input>

            <input type="hidden" name="cat_id" value={this.state.cat_id} />

            <div className="submit">
              <Button className="submit-button" type="submit" onClick={this.goListings}>
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
