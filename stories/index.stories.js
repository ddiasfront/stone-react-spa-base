import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { TextComponent } from "../src/components/atoms/Text.component";
import { TitleComponent } from "../src/components/atoms/Title.component";
import { DescriptionPrice } from "../src/components/molecules/DescriptionPrice.component";
import "../src/scss/style.scss";

storiesOf("Componente de Texto", module).add("Renderiza paragrafo", () => (
  <TextComponent>Render Paragrafo</TextComponent>
));

storiesOf("Componente de Texto", module).add("Renderiza span", () => (
  <TextComponent texttype={"span"}>Render Span</TextComponent>
));

storiesOf("Componente de Texto", module).add("Renderiza com classe", () => (
  <TextComponent texttype={"span"} styleClass={"classtest"}>
    Render Span
  </TextComponent>
));

storiesOf("Componente de preço e descrição", module).add(
  "Preco e descrição",
  () => (
    <DescriptionPrice
      description={
        "Lorem ipsum dolormet, consectetur adipiscing elit. Nulla ac pretium nisi. Aenean ultrices tellus ligula, et vehicula nisl aliquamngue. Nam ultrices rutrum elit, vitae dignissim tellus posuere vel. Fusce non laoreet nisi. Vivamus viverra sed est vel varius. Nulla neque ligula, pharetra et pharetra eget, lacinia vel lorem. Proin ultrices ex turpis, id vestibulum odio hendrerit pulvinar. Nunc eu diam tincidunt, rutrum ante nec, gravida nisl. Pellentesque pulvinar dapibus condimentum. Fusce malesuada feugiat posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus n"
      }
      price={123}
      img={"https://via.placeholder.com/150"}
      imgAlt={"altimg"}
    />
  )
);
