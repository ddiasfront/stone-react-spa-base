import * as React from "react";

type Props = {
  texttype?: string;
};

export const TextComponent: React.FC<Props> = (props: any) => {
  const { children, texttype } = props;

  const renderText = (texttype?: string) => {
    switch (texttype) {
      case "span":
        return <span>{children}</span>;
      default:
        return <p>{children}</p>;
    }
  };

  return renderText(texttype);
};
