// actions.js
import { ADD_USER, EDIT_USER, DELETE_USER } from "./actionTypes";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const editUser = (id, updatedUser) => {
  return {
    type: EDIT_USER,
    payload: { id, updatedUser },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
