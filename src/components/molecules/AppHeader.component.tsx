import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { TitleComponent } from "../atoms/Title.component";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const AppHeader: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="center" alignContent="center">
          <TitleComponent>
            <Link href="/">
              <a>Livraria Flip</a>
            </Link>
          </TitleComponent>
        </Grid>
        <Grid>
          <Link href="/cart">
            <ShoppingCartIcon style={{ cursor: "pointer" }} />
          </Link>{" "}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
