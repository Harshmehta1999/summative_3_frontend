import * as React from "react";
import { Link } from "@reach/router";
import * as UTILS from "../src/utils";
import Axios from "axios";
import AddArtwork from "./components/AddArtwork";
import CategorySelector from "./components/CategorySelector";
import GlobalNav from "./components/GlobalNav";
import { Router } from "@reach/router";
import Design from "./components/Design";
import Home from "./components/Home"
import Illustration from "./components/Illustration"
import IndividualArtwork from "./components/IndividualArtwork";
import Photography from "./components/Photography";
import Painting from "./components/Painting";




export default class App extends React.Component {




  constructor(props) {
    super(props);
    
  }







  render() {
    return (
     
        
<React.Fragment>   

 <Router>
 <Home path="/" />
          <Design path="/designs" />
          <Illustration path="/illustrations" />
          <Photography path="/photographs" />
          <Painting path="/paintings" />
          <IndividualArtwork path="/IndividualArtwork/:id" />
       
          


        </Router>
  {/* <GlobalNav />  */}

{/* 
  <AddArtwork /> */}
{/* <CategorySelector /> */}
    
</React.Fragment>
    )
  }
}


