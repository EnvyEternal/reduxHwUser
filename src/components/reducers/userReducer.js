import ACTION_TYPES from "../actions/actionsType";

const initialState = {
    isFetching: false,
    users: [],
    error: null,
    isAuth: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER: {
      const { users } = state;
      const { data } = action;
      const {isAuth} = state
      const newUser = {
        ...data,
        id: Date.now(),
        isAuth: !isAuth,
      };
      const newUsers = [...users, newUser];
      return { users: newUsers };
    }
    case ACTION_TYPES.DELETE_USER: {
      const { users } = state;
      const { id } = action;
      const newUsers = [...users];
      newUsers.splice(
        newUsers.findIndex((u) => id === u.id),
        1,
      );
      return { users: newUsers };
    }
    default:
      return state;
  }
};

export default userReducer;
