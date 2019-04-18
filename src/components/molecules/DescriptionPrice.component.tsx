import { TextComponent } from "../atoms/Text.component";
import Grid from "@material-ui/core/Grid";
import { FormattedNumber } from "react-intl";

import * as React from "react";

type Props = {
  description: string;
  price: number;
  styleClassDesc: string;
  styleClassPrice: string;
  img: string;
  imgAlt: string;
};

export const DescriptionPrice: React.FC<Props> = (props: any) => {
  const { description, price, img, imgAlt } = props;

  const renderDescription = descr => {
    let actualdesc = descr.slice(0, 150);
    let actualdescspacepoint = actualdesc.lastIndexOf(" ");
    let finaldesc = actualdesc.slice(0, actualdescspacepoint);
    return finaldesc + " " + "...";
  };

  return (
    <Grid container sm={12} md={4} className="descriptionPriceContainer">
      <Grid sm={6} item container direction="column">
        <img className="descriptionPriceImage" alt={imgAlt} src={img} />
      </Grid>
      <Grid
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="info"
      >
        <TextComponent
          styleClass={
            props.styleClassDesc ? props.styleClassDesc : "description"
          }
        >
          {renderDescription(description)}
        </TextComponent>
        <TextComponent
          texttype="span"
          styleClass={props.styleClassPrice ? props.styleClassPrice : "price"}
        >
          <FormattedNumber style="currency" currency="BRL" value={price} />
        </TextComponent>
      </Grid>
    </Grid>
  );
};
