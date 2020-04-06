import * as React from "react";
import "../App.css";


import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import Axios from "axios";

import GlobalNav from "./GlobalNav";
import AddArtwork from "./AddArtwork";



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categories: [],designers:[]};
  }
  componentDidMount(){
    Axios.get(UTILS.categories_url).then(
      res => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          console.table(res.data)
          this.setState({categories: res.data, result: true });
        }
      },
      error => {
        console.log("error = ", error);
      }
    );
    
  }





  render() {
    return (

  
     <React.Fragment>

    <GlobalNav />
<AddArtwork />

       {/* {this.state.categories.map((category, i) => {
      console.log(this.state.categories)
      return <h2> key={i} designers first_name= {category.category_title}<br></br></h2>
  

    })} */}
 

    

  
      </React.Fragment>
    );
  }
}
