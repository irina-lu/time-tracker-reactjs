import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <ul className="nav__list">
        <li className="nav__item nav__item_active">
          <a href="#">Home</a>
        </li>
        <li className="nav__item">
          <a href="#">Issues</a>
        </li>
        <li className="nav__item">
          <a href="#">Filer</a>
        </li>
        <li className="nav__item">
          <a href="#">Projects</a>
        </li>
      </ul>
    );
  }
}

export default Nav;
