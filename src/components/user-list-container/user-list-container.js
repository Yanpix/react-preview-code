import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import UserList from "../user-list";
import { withFakeDataService } from "../hoc";
import { fetchUsers, addUserToList } from "../../actions";

import Spinner from "../spinner";

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <h1>Something went wrong.</h1>;
    }

    return <UserList users={users} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ usersList: { users, loading, error } }) => {
  return { users, loading, error };
};

const mapDispatchToProps = (dispatch, { fakeDataService }) => {
  return {
    fetchUsers: fetchUsers(fakeDataService, dispatch),
    onAddedToCart: id => dispatch(addUserToList(id))
  };
};

export default compose(
  withFakeDataService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UsersListContainer);
