import React from "react";
import { connect } from "react-redux";
import Spinner from "../wave-spinner";
import { Link } from "react-router-dom";
import { addUserToList, deleteUserFromList, deleteAllUserFromList } from "../../actions";
import "./employee-cart-table.css";

const EmployeeCartTable = ({ items, onIncrease, onDecrease, onDelete }) => {
  if (!items.length) {
    return (
      <div className="emploeey-cart-table">
        <h2>Here will be your orders for a unique phrase.</h2>
        <Spinner />
      </div>
    );
  }

  const renderRow = (item, idx) => {
    const { id, title, count, email } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{email}</td>
        <td>{count}</td>
        <td>
          <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button onClick={() => onDecrease(id)} className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="emploeey-cart-table">
      <h2>Your Order unique blockquotes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Copy</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total unique blockquotes: {items.length}</div>
      <div className="total">
        Check your
        <Link to="/cart"> basket.</Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ employeeCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: addUserToList,
  onDecrease: deleteUserFromList,
  onDelete: deleteAllUserFromList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeCartTable);
