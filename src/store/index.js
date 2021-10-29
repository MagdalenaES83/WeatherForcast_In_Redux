import { createStore } from "redux";
import { mainReducer } from "../reducer";



export const initialState = {
  city: [],
};



const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
