import { initialState } from "../store";

export const mainReducer = (state = initialState.city, action) => {
  switch (action.type) {
    case "FETCH_CITY":
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};
