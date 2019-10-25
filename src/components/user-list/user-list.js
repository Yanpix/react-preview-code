import React from "react";
import UserListItem from "../user-list-item";

import "./user-list.css";

const UserList = ({ users, onAddedToCart }) => {
  return (
    <ul className="user-list">
      {users.map((user, index) => {
        return (
          <li key={user.id}>
            <UserListItem user={user} onAddedToCart={() => onAddedToCart(user.id)} userIndex={index} />
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
