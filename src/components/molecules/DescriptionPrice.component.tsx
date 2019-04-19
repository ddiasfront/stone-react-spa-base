import { TextComponent } from "../atoms/Text.component";
import { TitleComponent } from "../atoms/Title.component";
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
  bookTitle?: string;
};

export const DescriptionPrice: React.FC<Props> = (props: any) => {
  const { description, price, img, imgAlt, bookTitle } = props;

  const renderDescription = descr => {
    let actualdesc = descr.slice(0, 150);
    let actualdescspacepoint = actualdesc.lastIndexOf(" ");
    let finaldesc = actualdesc.slice(0, actualdescspacepoint);
    return finaldesc + " " + "...";
  };

  return (
    <Grid container className="descriptionPriceContainer">
      <Grid container sm={12} justify="center" alignItems="center">
        {bookTitle && (
          <TitleComponent style={{ margin: "0 0 15px 0" }} titleType="h3">
            {bookTitle}
          </TitleComponent>
        )}
      </Grid>
      <Grid
        sm={6}
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ paddingRight: 5 }}
      >
        <img className="descriptionPriceImage" alt={imgAlt} src={img} />
      </Grid>
      <Grid
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="info"
        style={{ paddingLeft: 5 }}
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
