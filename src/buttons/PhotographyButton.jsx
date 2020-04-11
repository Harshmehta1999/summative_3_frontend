import React, { Component } from "react";
// import Axios from "axios";
import { navigate } from "@reach/router";

export default class PhotographyButton extends Component {

  constructor(props) {
    super(props);

    console.table(this.props)
    
  }

  getPhotographyInfo = e => {
    navigate(`/IndividualArtwork/${this.props.id}`)
    
    

  };

  // render(){
  //   return(
  //   <h2>{this.props.bookTitle}</h2>
    
   
  //   )
  // }


  render() {
    return <button onClick={this.getPhotographyInfo}>{this.props.photography_title}</button>;


    
  }
}
