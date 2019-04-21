import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as booksCartReducer } from "./states/books/reducer";

export const initStore = (initialState: any) => {
  return createStore(
    combineReducers({
      booksCartReducer: booksCartReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
