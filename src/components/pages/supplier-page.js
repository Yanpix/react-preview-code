import React, { Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../wave-spinner";

const SupplierPage = ({ items }) => {
  if (!items.length) {
    return (
      <div className="emploeey-cart-table">
        <h2>The basket is empty, select quotes and the order can be placed.</h2>
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
      </tr>
    );
  };

  return (
    <Fragment>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Copy</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <p>P.s. If you want edit your order, please go back.</p>
    </Fragment>
  );
};

const mapStateToProps = ({ employeeCart: { cartItems } }) => {
  return {
    items: cartItems
  };
};

export default connect(
  mapStateToProps,
  null
)(SupplierPage);
