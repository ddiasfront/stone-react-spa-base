import { TextComponent } from "../atoms/Text.component";
import Grid from "@material-ui/core/Grid";

import * as React from "react";

type Props = {
  description: string;
  price: number;
  styleClassDesc: string;
  styleClassPrice: string;
};

export const DescriptionPrice: React.FC<Props> = (props: any) => {
  const { description, price } = props;

  return (
    <Grid sm container>
      <Grid item xs container direction="column">
        <img
          alt="complex"
          src="https://www.alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
        />
      </Grid>
      <Grid sm={6} item>
        <TextComponent
          styleClass={
            props.styleClassDesc ? props.styleClassDesc : "description"
          }
        >
          {description}
        </TextComponent>
        <TextComponent
          styleClass={props.styleClassPrice ? props.styleClassPrice : "price"}
        >
          {price}
        </TextComponent>
      </Grid>
    </Grid>
  );
};
