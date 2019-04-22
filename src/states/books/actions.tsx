export const ADD_BOOK = "[Book] Add";
export const REMOVE_BOOK = "[Book] Remove";

export const addBook = (book: string) => (dispatch: any) => {
  return dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (book: string) => (dispatch: any) => {
  return dispatch({ type: REMOVE_BOOK, book });
};
