import React from 'react';
import './employee-header.css';
import { Link } from 'react-router-dom';

const EmployeeHeader = ({ total }) => {
  return (
    <header className="employee-header row">
      <Link to="/">
        <div className="logo text-dark">Blockquotes shop</div>
      </Link>
      <Link to="/cart">
        <div className="employee-cart">
          <i className="cart-icon fa fa-trash" />
          Basket
        </div>
      </Link>
    </header>
  );
};

export default EmployeeHeader;
