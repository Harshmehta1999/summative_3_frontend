import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
// import { navigate } from "@reach/router";
import DesignButton from "../buttons/DesignButton";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/categories.css";
import "bootstrap/dist/css/bootstrap.css";

import Image from "../images/artist.jpg"

export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = { design: [] };
  }

  // getDesignInfo = e => {
  //   navigate(`/IndividualArtwork/${this.props.id}`)

  // };

  componentDidMount() {
    Axios.get(UTILS.category_design_url).then(res => {
      if (res.data.result === false) {
        this.setState({ result: false });
      } else {
        console.table(res.data);
        this.setState({ design: res.data, result: true });
      }
    });
  }


  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />
        <span>DESIGNS</span>


            <div className="container">
            {this.state.design.map((design, i) => {
                 return (
               
             
                     <div className="card">
                       <img src={Image} class="card-img-top" />
                       <div className="card-body">
                       <DesignButton className="card-title" design_title={design.artwork_title} id={design.id} />
                         <h6 className="card-subtitle">{design.artwork_subtitle}</h6>
                         <p className="card-price">${design.price}</p>
   
                       </div>
                     </div>
                  
                 );
               })}
               </div>

      </React.Fragment>
    );
  }
}
