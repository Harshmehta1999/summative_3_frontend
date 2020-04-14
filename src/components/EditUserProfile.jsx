import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/edituserprofile.css";
import SubNav from "./SubNav";
import TopNav from "./TopNav";

export default class EditUserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: "",
      Email: "",
      Phone: ""
    };
  }

  BackToProfile = e => {
    navigate("/account");
  };

  onChangeUser = e => {
    this.setState({ User: e.target.value });
    localStorage.setItem("user", e.target.value);
  };

  onChangeEmail = e => {
    this.setState({ Email: e.target.value });
    localStorage.setItem("email", e.target.value);
  };

  onChangePhone = e => {
    this.setState({ Phone: e.target.value });
    localStorage.setItem("phone", e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({
        User: localStorage.getItem("user")
      });
    }

    if (localStorage.getItem("email")) {
      this.setState({
        Email: localStorage.getItem("email")
      });
    }

    if (localStorage.getItem("phone")) {
      this.setState({
        Phone: localStorage.getItem("phone")
      });
    }
  }
  render() {
    return (
      <React.Fragment>
          <TopNav />
          <SubNav />
        <div className="edit-profile">
          <span>EDIT PROFILE</span>

          <form className="edit-form" onSubmit={this.onSubmit}>
         
            <input
              type="text"
              placeholder="User"
              value={this.state.User}
              onChange={this.onChangeUser}
            ></input>
            <input
              type="text"
              placeholder="Email"
              value={this.state.Email}
              onChange={this.onChangeEmail}
            ></input>
            <input
              type="text"
              placeholder="Phone"
              value={this.state.Phone}
              onChange={this.onChangePhone}
            ></input>

            <div className="submit">
              <button
                className="submit-button"
                type="submit"
                onClick={this.BackToProfile}
              >
                DONE
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
