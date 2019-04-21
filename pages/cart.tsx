import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetch from "isomorphic-unfetch";
import "../src/scss/style.scss";
import { AppHeader } from "../src/components/molecules/AppHeader.component";
import Book from "../src/types/book.type";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import CartTable from "../src/components/molecules/CartTable.component";

interface IProps {
  books: Array<Book>;
}

interface IState {}

class CartPage extends React.Component<IProps, IState> {
  render() {
    const { books } = this.props;
    console.log(this.props);
    return (
      <div>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={10}>
            <Paper>
              <Table>
                <CartTable
                  TableType="Head"
                  RowHead={["Descrição", "Quantidade", "Subtotal", " "]}
                />
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  booksCartReducer: state.booksCartReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  // addBook: bindActionCreators(addBook, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
