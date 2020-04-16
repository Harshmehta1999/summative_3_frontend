import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import { Link } from "@reach/router";
import * as UTILS from "../utils";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { artworks: [] };
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/api/artworks/${this.props.id}`).then(
      (res) => {
        console.log(res.data);
        this.setState({ artworks: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div>
        <h2>helloss</h2>

        {this.state.artworks.map((artwork, i) => {
          return (
            <div>
              <h2>
                artwork Title = {artwork.artwork_title}
                <br></br>artwork subtitle = {artwork.artwork_subtitle}
                <br></br>artworks price = {artwork.price}
                {/* <br></br>artwork image = {artwork.image} */}
                <br></br>{" "}
                <img src={`http://localhost:9000/${artwork.image}`} alt="img" />
              </h2>
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
