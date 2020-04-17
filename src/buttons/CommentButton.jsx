import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

export default class CommentButton extends Component {

  constructor(props) {
    super(props);

    console.table(this.props)
    
  }

//   getDesignInfo = e => {
//     navigate(`/IndividualArtwork/${this.props.id}`)
    
    

//   };

  // render(){
  //   return(
  //   <h2>{this.props.bookTitle}</h2>
    
   
  //   )
  // }


  render() {
    return <button>SUBMIT</button>;


    
  }
}
