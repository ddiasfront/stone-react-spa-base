import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as announcementReducer } from "./states/announcement/reducer";

export const initStore = (initialState: any) => {
  return createStore(
    combineReducers({
      announcement: announcementReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
