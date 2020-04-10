import React, { Component } from "react";
import { Link } from "@reach/router";

const menuStyle = {
  display: "flex",
  width: "30vw",
  margin: "0 auto",
  justifyContent: "space-evenly",
  alignItems: "center",
  listStyleType: "none"
};

const LinkStyle = { color: "#4caf50" };

export default class GlobalNav extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
         <nav>
        <ul style={menuStyle}>
          <li>
            <Link style={LinkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/designs">
              Designs
            </Link>
          </li>

          <li>
            <Link style={LinkStyle} to="/illustrations">
              Illustrations
            </Link>
          </li>

          <li>
            <Link style={LinkStyle} to="/photographs">
              Photographs
            </Link>
          </li>

          <li>
            <Link style={LinkStyle} to="/paintings">
              Paintings
            </Link>
          </li>
          {/* <li>
            <Link style={LinkStyle} to="/add-writer">
             Add writer
            </Link>
          </li>


          <li>
            <Link style={LinkStyle} to="/add-book">
             Add book
            </Link>
          </li> */}
        </ul>
      </nav>
      </div>
     
    );
  }
}
