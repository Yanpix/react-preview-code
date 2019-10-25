import React from "react";
import UsersListContainer from "../user-list-container";
import EmployeeCartTable from "../employee-cart-table/employee-cart-table";
import { connect } from "react-redux";

const HomePage = ({ users }) => {
  return (
    <div>
      <UsersListContainer />
      {users.length > 0 && <EmployeeCartTable />}
    </div>
  );
};

const mapStateToProps = ({ usersList: { users } }) => {
  return { users };
};

export default connect(
  mapStateToProps,
  null
)(HomePage);
