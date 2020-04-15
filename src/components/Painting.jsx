import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import PaintingButton from "../buttons/PaintingButton";
import TopNav from "./TopNav";
import SubNav from "./SubNav";
import Image from "../images/artist.jpg"

export default class Painting extends Component {
  constructor(props) {
    super(props);

    this.state = { painting: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_painting_url).then(res => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ painting: res.data, result: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />

        <span>PAINTINGS</span>


<div className="container">
            {this.state.painting.map((painting, i) => {
                 return (
               
             
                     <div className="card">
                       <img src={Image} class="card-img-top" />
                       <div className="card-body">
                       <PaintingButton className="card-title" painting_title={painting.artwork_title} id={painting.id} />
                         <h6 className="card-subtitle">{painting.artwork_subtitle}</h6>
                         <p className="card-price">${painting.price}</p>
   
                         </div>
                     </div>
                  
                 );
               })}
               </div>
      </React.Fragment>
    );
  }
}
