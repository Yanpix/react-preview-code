import updateUsersList from './user-list';
import updateEmployeeCart from './employee-cart';

const reducer = (state, action) => {
  return {
    usersList: updateUsersList(state, action),
    employeeCart: updateEmployeeCart(state, action)
  };
};

export default reducer;
