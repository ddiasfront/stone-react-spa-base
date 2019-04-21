import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import * as React from "react";
import Book from "src/types/book.type";

type Props = {
  children: any;
  withButton: Boolean;
  clickAction?: any;
  book: Book;
};

export const CardComponent: React.FC<Props> = (props: Props) => {
  const { children, withButton, clickAction, book } = props;

  return (
    <Grid item xs={12} sm={6} md={4} style={{ padding: 20 }}>
      <Card className="wrapperCard">
        <CardContent>{children}</CardContent>
        <CardActions style={{ margin: 0, padding: 0 }}>
          {withButton && (
            <Button
              style={{ borderRadius: 0, margin: 0, width: "100%", padding: 10 }}
              onClick={() => clickAction(book)}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};
