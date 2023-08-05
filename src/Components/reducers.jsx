// reducers.js
import { ADD_USER, EDIT_USER, DELETE_USER } from "./actionTypes";

const initialState = {
  users: [
    {
      name: "Gideon Oseini",
      role: "PHP Developer",
      email: "gideon@email.com",
      gen: 24,
      id: "asdnss5243",
    },
    {
      name: "King Robert",
      role: "React Developer",
      email: "king@email.com",
      gen: 20,
      id: "as526283",
    },
    {
      name: "Phyllis Mansah",
      role: "Frontend Developer",
      email: "phyllis@email.com",
      gen: 15,
      id: "gsva415162",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload.updatedUser : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
