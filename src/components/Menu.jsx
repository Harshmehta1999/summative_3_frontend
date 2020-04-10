import React, { Component } from "react";
import { navigate } from "@reach/router";
import SubNav from "./SubNav";
import TopNav from "./TopNav"
import "../css/menu.css"

export default class Menu extends Component {
  componentDidMount() {}

  goDesigns = e => {
    navigate(`/designs`);
  };

  goIllustration = e => {
    navigate(`/illustrations`);
  };

  goPaintings = e => {
    navigate(`/paintings`);
  };

  goPhotography = e => {
    navigate(`/photographs`);
  };
    
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <SubNav />

        <div className="menu-nav">
            <button onClick={this.goDesigns} className="design bttn">DESIGN</button>
            <button onClick={this.goIllustration} className="illustration bttn">ILLUSTRATION</button>
            <button onClick={this.goPaintings} className="paintings bttn">PAINTINGS</button>
            <button onClick={this.goPhotography} className="photography bttn">PHOTOGRAPHY</button>
        </div>
      </React.Fragment>
    );
  }
}
