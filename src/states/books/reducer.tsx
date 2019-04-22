import { Books } from "./state";
import * as bookActions from "./actions";

const initialState: Books = {
  Books: []
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case bookActions.ADD_BOOK:
      if (
        !state.Books ||
        state.Books.every(book => book.code !== action.book.code)
      ) {
        action.book.quantity = 1;
        return Object.assign({}, state, {
          Books: state.Books.concat(action.book)
        });
      } else {
        return Object.assign({}, state, {
          Books: state.Books.map(book => {
            if (book.code == action.book.code) {
              return {
                ...book,
                quantity: book.quantity + 1
              };
            } else {
              return book;
            }
          })
        });
      }
    case bookActions.REMOVE_BOOK:
      debugger;
      return Object.assign({}, state, {
        Books: state.Books.map(book => {
          if (book.code == action.book.code && book.quantity >= 1) {
            return {
              ...book,
              quantity: book.quantity - 1
            };
          } else {
            return book;
          }
        })
      });
    default:
      return state;
  }
};
