import React, { Component } from "react";
import { navigate } from "@reach/router";

export default class EditUserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: "",
      Email: "",
      Phone: "",
    };
  }

  BackToProfile = (e) => {
    navigate("/profile-page");
  };

  onChangeUser = (e) => {
    this.setState({ User: e.target.value });
    localStorage.setItem("user", e.target.value);
  };

  onChangeEmail = (e) => {
    this.setState({ Email: e.target.value });
    localStorage.setItem("email", e.target.value);
  };

  onChangePhone = (e) => {
    this.setState({ Phone: e.target.value });
    localStorage.setItem("phone", e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({
        User: localStorage.getItem("user"),
      });
    }

    if (localStorage.getItem("email")) {
      this.setState({
        Email: localStorage.getItem("email"),
      });
    }

    if (localStorage.getItem("phone")) {
      this.setState({
        Phone: localStorage.getItem("phone"),
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Edit Profile</h2>
          <form onSubmit={this.onSubmit}>
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
       

            <button type="submit" onClick={this.BackToProfile}>
              Sign up
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
