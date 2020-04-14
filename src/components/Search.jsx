import React, { Component } from "react";
import SubNav from "./SubNav";
import TopNav from "./TopNav";
import "../css/search.css";
import Design from "./Design"

export default class Search extends Component {
  constructor(props) {
    super(props);

//     this.state = {
//       filteredList: productList,
//       searchResults: 0
//     };
//   }

//   fliterByKeywords = event => {
//     let searchTerm = event.target.value.toLowerCase();
//     let temp = [];
//     productList
//       .filter(item => item.artwork_title.toLowerCase().includes(searchTerm))
//       .map((e, i) => {
//         return temp.push(e);
//       });
  };

  render() {
    return (
      <React.Fragment>
        <div className="search-wrapper">
          <input placeholder="SEARCH" 
          className="autocomplete search-bttn" 
          type="text"
          onChange={this.fliterByKeywords} />
        </div>

        <TopNav />

        {/* {this.state.productList.map((ele, i) => {
            return this.state.searchResults ? (
              <Design 
              design_title={ele.design_title}/>
            ) : null;
          })} */}
        
        <SubNav />
      </React.Fragment>
    );
  }
}
