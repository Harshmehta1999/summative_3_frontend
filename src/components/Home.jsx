import * as React from "react";
import "../App.css";
import { Button } from "reactstrap";

import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import Axios from "axios";

import GlobalNav from "./GlobalNav";
import AddArtwork from "./AddArtwork";
import ImageUpload from "./ImageUpload";



export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedFile: null}
    // this.state = {categories: [],designers:[],selectedFile: null}
  }

  onChangeHandler = event =>{

    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })


  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    Axios.post(`http://localhost:9000/api/artworks/form-with-image`, data, { 
      // receive two    parameter endpoint url ,form data
  }).then(res => { // then print response status
    console.log(res.statusText)
 })

  }

  

  // fileSelectedHandler = event =>{
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   })
  // }

  // fileUploadHandler = event => {
  //   const fd = new FormData();
  //   fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
  //   Axios.post("http://localhost:9000/api/uploads",fd)
  //   .then(res =>  {
  //     console.log(res);
  //   })
  // }

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

   

<input type="file" name="file" onChange={this.onChangeHandler}/>
    <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 

    
<AddArtwork />



  
      </React.Fragment>
    );
  }
}
