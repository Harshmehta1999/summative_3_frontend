import React, { Component } from 'react';
import Axios from "axios";

export default class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };

    }
    // onFormSubmit(e){
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('myImage',this.state.file);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     };
    //     Axios.post("http://localhost:9000/api/artworks",formData,config)
    //         .then((response) => {
    //             alert("The file is successfully uploaded");
    //         }).catch((error) => {
    //     });
    // }
    // onChange(e) {
    //     this.setState({file:e.target.files[0]});
    // }

    render() {
        return (
           
            

<h21>hey</h21>
    
        )
    }
}
