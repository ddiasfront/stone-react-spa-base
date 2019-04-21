import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBook } from "../src/states/books/actions";
import fetch from "isomorphic-unfetch";
import "../src/scss/style.scss";
import { LibraryCards } from "../src/components/molecules/LibraryCards.component";
import { AppHeader } from "../src/components/molecules/AppHeader.component";
import Book from "../src/types/book.type";
import Grid from "@material-ui/core/Grid";

interface IProps {
  books: Array<Book>;
  addBook: any;
}

interface IState {}

class IndexPage extends React.Component<IProps, IState> {
  static async getInitialProps() {
    const res = await fetch("https://testapi.io/api/ddiasfront//library");
    const books = await res.json();
    return books;
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid container style={{ padding: 50 }}>
          <LibraryCards libraryCards={books} action={this.props.addBook} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  booksCartReducer: state.booksCartReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  addBook: bindActionCreators(addBook, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
