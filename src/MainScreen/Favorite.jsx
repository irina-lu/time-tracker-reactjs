import React from "react";
import "./Favorite.scss";

function Favorite() {
  return (
    <section className="favorite">
      <h2 className="visually-hidden">Favorite issues</h2>
      <p className="favorite__message">There is no favorite issues yet</p>
      <div className="favorite__btn-wrapper">
        <button className="favorite__btn">
          <span className="visually-hidden">Add new favorite</span>
        </button>
        <p className="favorite__phrase">new favorite</p>
      </div>
    </section>
  );
}

export default Favorite;
