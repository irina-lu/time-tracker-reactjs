import React from "react";
import "./UserMenu.scss";

class UserMenu extends React.Component {
  render() {
    return (
      <ul className="user-list">
        <li className="user-list__item user-list__item_settings">
          <a className="user-list__link" href="#">
            <span className="visually-hidden">Settings</span>
          </a>
        </li>
        <li className="user-list__item user-list__item_info">
          <a className="user-list__link" href="#">
            <span className="visually-hidden">Information</span>
          </a>
        </li>
        <li className="user-list__item user-list__item_exit">
          <a className="user-list__link" href="#">
            <span className="visually-hidden">Log out</span>
          </a>
        </li>
        <li className="user-list__item user-list__item_profile">
          <a className="user-list__link user-list__link_profile" href="#">
            <span className="visually-hidden">Your profile</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default UserMenu;
