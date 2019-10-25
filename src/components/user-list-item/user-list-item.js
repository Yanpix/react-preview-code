import React from "react";
import "./user-list-item.css";
import coverImage from "../../images/default-user-img.png";

const UserListItem = ({ user, onAddedToCart, userIndex }) => {
  const { name, email, body } = user;
  return (
    <div className="user-list-item">
      <div className="user-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="user-details">
        <div className="user-title">
          {userIndex + 1}) Author: {email}
        </div>
        <div className="user-author">"{name}"</div>
        <div className="user-blockqoute">Blockqoute: <span>"{body}"</span></div>
      </div>
      <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
        Add to cart
      </button>
    </div>
  );
};

export default UserListItem;
