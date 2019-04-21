export const ADD_BOOK = "[Book] Add";

export const addBook = (book: string) => (dispatch: any) => {
  return dispatch({ type: ADD_BOOK, book });
};
