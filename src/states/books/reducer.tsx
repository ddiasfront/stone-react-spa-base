import * as bookActions from "./actions";

const initialState: any = {
  Books: [],
  FinalValue: 0
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
          Books: state.Books.concat(action.book),
          FinalValue: state.FinalValue + action.book.price
        });
      } else {
        return Object.assign({}, state, {
          FinalValue: state.FinalValue + action.book.price,
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
      if (action.quantity == 1) {
        return Object.assign({}, state, {
          Books: state.Books.filter(book => book.code !== action.book.code),
          FinalValue: state.FinalValue - action.book.price
        });
      } else {
        return Object.assign({}, state, {
          FinalValue:
            state.FinalValue >= 1 ? state.FinalValue - action.book.price : 0,
          Books:
            state.Books.length >= 1 &&
            state.Books.map(book => {
              if (book.code == action.book.code && book.quantity > 1) {
                return {
                  ...book,
                  quantity: book.quantity - 1
                };
              } else {
                return book;
              }
            })
        });
      }
    default:
      return state;
  }
};
