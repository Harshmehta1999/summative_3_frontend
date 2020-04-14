import React, { Component } from "react";
import { navigate } from "@reach/router";


export default class Profile extends Component {
  constructor() {
    super();

    let u = window.localStorage.getItem("user") || "User name";
    let e = window.localStorage.getItem("email") || "Email";
    let p = window.localStorage.getItem("phone") || "Phone";

    this.state = {
      data: "",
      user: u,
      email: e,
      phone: p,
    };
  }

  gotoUserEdit = (e) => {
    navigate("/edit-userprofile-page");
  };

  render() {
    return (
      <React.Fragment>
        
        <div>
      

          <div>
 

            <div>
              <h3>{this.state.user}</h3>
              <p>{this.state.email}</p>
              <p >{this.state.phone}</p>
            </div>
          </div>

          <button

            onClick={this.gotoUserEdit}
          >
            Edit Profile
          </button>


        </div>


      </React.Fragment>
    );
  }
}

