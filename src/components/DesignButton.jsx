import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

export default class DesignButton extends Component {

  constructor(props) {
    super(props);

    console.table(this.props)
    
  }

  getDesignInfo = e => {
    navigate(`/IndividualArtwork/${this.props._id}`)
    
    

  };

  // render(){
  //   return(
  //   <h2>{this.props.bookTitle}</h2>
    
   
  //   )
  // }


  render() {
    return <button onClick={this.getDesignInfo}>{this.props.design_title}</button>;


    
  }
}
