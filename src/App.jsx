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
import IndividualArtwork from "./components/IndividualArtwork";



export default class App extends React.Component {




  constructor(props) {
    super(props);
    
  }







  render() {
    return (
     
        
<React.Fragment>   

 <Router>
 <Home path="/" />
          <Design path="/designers" />
          {/* <IndividualArtwork path="/IndividualArtwork/:id" /> */}
       
          


        </Router>
  {/* <GlobalNav />  */}

{/* 
  <AddArtwork /> */}
{/* <CategorySelector /> */}
    
</React.Fragment>
    )
  }
}


