import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import CategorySelector from "./CategorySelector";



export default class AddArtwork extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { categories: [], selected_id: null,id: Date.now() };
    
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
    




  onCategoryUpdated = e => {
    this.setState({ cat_id: e.target.value });
  };

  // AddArtwork = e => {
  //   e.preventDefault();

  //   var formData = new FormData(this.formRef.current);
 
  //   Axios.post("http://localhost:9000/api/artworks", formData).then(res => {
  //     // alert("The file is successfully uploaded");
  //     console.log(res);
  //   });
  // };
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
          <input type="file" name="image"></input>
          {/* <input type="text" name="image" placeholder="price" /> */}

          <input id="id" type="hidden" name="id" value={this.state.id} />

          <input type="hidden" name="cat_id" value={this.state.cat_id} />
          {/* <input type="hidden" name="artwork_title" value={this.state.artwork_title} /> */}

          
         
        
  

       <button>Add Item</button>
          
        </form>
          {/* <ImageUpload /> */}
      </div>
    );
  }
}
