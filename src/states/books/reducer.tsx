import { Books } from "./state";
import * as bookActions from "./actions";

const initialState: Books = {
  Books: []
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case bookActions.ADD_BOOK:
      return Object.assign({}, state, {
        Books: state.Books.concat(action.book)
      });
    default:
      return state;
  }
};
