import { CardComponent } from "../molecules/Card.component";
import * as React from "react";
import { DescriptionPrice } from "./DescriptionPrice.component";
import Grid from "@material-ui/core/Grid";
import Book from "../../types/book.type";

type Props = {
  libraryCards: Array<Book>;
  action?: any;
};

export class LibraryCards extends React.Component<Props> {
  render() {
    const { libraryCards, action } = this.props;
    return (
      <Grid container xs={12}>
        {libraryCards
          ? libraryCards.map((book, key) => {
              return (
                <CardComponent
                  withButton={true}
                  key={key}
                  clickAction={action}
                  book={book}
                >
                  <DescriptionPrice
                    description={book.description}
                    price={book.price}
                    img={book.img}
                    imgAlt={book.imgAlt}
                    bookTitle={book.bookTitle}
                  />
                </CardComponent>
              );
            })
          : false}
      </Grid>
    );
  }
}
