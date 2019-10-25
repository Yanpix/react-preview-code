import * as types from "../actions/constant";

const updateCartEmployees = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartEmployee = (user, item = {}, quantity) => {

  const {
    id = user.id,
    count = 0,
    title = user.name,
    email = user.email } = item;

  return {
    id,
    title,
    email,
    count: count + quantity,
  };
};

const updateOrder = (state, user_id, quantity) => {
  const { usersList: { users }, employeeCart: { cartItems }} = state;
  const user = users.find(({id}) => id === user_id);
  const itemIndex = cartItems.findIndex(({id}) => id === user_id);
  const item = cartItems[itemIndex];

  const newItem = updateCartEmployee(user, item, quantity);
  return {
    orderTotal: 0,
    cartItems: updateCartEmployees(cartItems, newItem, itemIndex)
  };
};

const updateEmployeeCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case types.USER_ADDED_TO_LIST:
      return updateOrder(state, action.payload, 1);

    case types.USER_DELETE_FROM_LIST:
      return updateOrder(state, action.payload, -1);

    case types.DELETE_ALL_USERS_FROM_LIST:
      const item = state.employeeCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.employeeCart;
  }
};

export default updateEmployeeCart;
