import * as React from "react";
// import { Link } from "@reach/router";
// import * as UTILS from "../src/utils";
// import Axios from "axios";
import AddArtwork from "./components/AddArtwork";
// import CategorySelector from "./components/CategorySelector";
import { Router } from "@reach/router";
import Design from "./components/Design";
import Home from "./components/Home";
import Illustration from "./components/Illustration";
import IndividualArtwork from "./components/IndividualArtwork";
import Photography from "./components/Photography";
import Painting from "./components/Painting";
import SubNav from "./components/SubNav";
import Menu from "./components/Menu";
import TopNav from "./components/TopNav";
import Account from "./components/Account";
import Search from "./components/Search";
import LoginSignup from "./components/LoginSignup";
import SignupPage from "./components/SignupPage";
import ProfileDetails from "./components/Profile";
import EditUserProfile from "./components/EditUserProfile";
import Cart from "./components/Cart";
import UserArtwoks from "./components/UserArtwoks";
import UserArtworkInfo from "./components/UserArtworkInfo";
import EditArtwork from "./components/EditArtwork";

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
          <SubNav path="/subnav" />
          <Menu path="/menu" />
          <Account path="/account" />
          <LoginSignup path="/loginpage" />
          <SignupPage path="/signuppage" />
          <ProfileDetails path="/profile-page" />
          <EditUserProfile path="/edit-userprofile-page" />
          <AddArtwork path="/addartwork" />
          <Search path="/search" />
          <Cart path="/cart" />
          <UserArtwoks path="/user-artworks" />
          <UserArtworkInfo path="/UserArtworkInfo/:id" />
          <EditArtwork path="/edit-details/:id" />

          <TopNav path="/header" />
        </Router>
      </React.Fragment>
    );
  }
}
