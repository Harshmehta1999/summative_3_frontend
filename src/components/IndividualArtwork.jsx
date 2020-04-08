import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";


export default class IndividualBookInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { artworks: [] };
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/api/artworks/_id`).then(
      res => {
        console.log(res.data);
        this.setState({ artworks: res.data });
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (

        <div>

          <h2>hello</h2>
     
             {/* {this.state.artworks.map((artworks, i) => {
              
            return <h2>  hshBook Title = {artworks.artwork_title}<br></br>artworks Pages = {artworks.price}<br></br>artworks Isbn = {artworks.isbn}<br></br></h2>
        

          })} */}

          

        </div>
      
    );
  }
}