import React from "react";
import "./Header.scss";
import Nav from "./Nav";
import UserMenu from "./UserMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-wrapper">
          <Nav />
          <UserMenu />
        </div>
      </div>
    );
  }
}

export default Header;
