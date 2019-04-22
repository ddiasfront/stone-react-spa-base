import React from "react";
import { connect } from "react-redux";
import "../src/scss/style.scss";
import { AppHeader } from "../src/components/molecules/AppHeader.component";
import Book from "../src/types/book.type";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import CartTable from "../src/components/molecules/CartTable.component";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { removeBook } from "../src/states/books/actions";
import { bindActionCreators } from "redux";

interface IProps {
  books: Array<Book>;
  booksCartReducer: {
    Books: Array<Book>;
    FinalValue: number;
  };
  removeBook: any;
}

interface State {
  FinalPrice: number;
}

class CartPage extends React.Component<IProps, State> {
  render() {
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
          <Grid item xs={10} style={{ margin: 50 }}>
            <Paper>
              <Table>
                <CartTable
                  TableType="Head"
                  RowHead={["Descrição", "Quantidade", "Subtotal", " "]}
                />
                {this.props.booksCartReducer &&
                this.props.booksCartReducer.Books &&
                this.props.booksCartReducer.Books.length > 0 ? (
                  <CartTable
                    TableRowArray={this.props.booksCartReducer.Books}
                    AlignType={"left"}
                    removeBook={this.props.removeBook}
                  />
                ) : (
                  <CartTable WithoutIcon={true} RowHead={[""]} />
                )}

                <TableRow>
                  <TableCell align={"left"}>Total</TableCell>

                  <TableCell align={"left"}>
                    {parseFloat(
                      this.props.booksCartReducer.FinalValue.toString()
                    ).toFixed(2)}
                  </TableCell>
                </TableRow>
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
  removeBook: bindActionCreators(removeBook, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
