import ACTION_TYPES from './actionsType';

export const createUser = (data) => {
  return {
    type: ACTION_TYPES.CREATE_USER,
    data: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    id: id,
  };
};
