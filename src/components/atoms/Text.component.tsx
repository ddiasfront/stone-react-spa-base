import * as React from "react";

type Props = {
  texttype?: string;
  styleClass?: string;
};

export const TextComponent: React.FC<Props> = (props: any) => {
  console.log(props)
  const { children, texttype } = props;

  const renderText = (texttype?: string) => {
    switch (texttype) {
      case "span":
        return <span className={props.styleClass}>{children}</span>;
      default:
        return <p className={props.styleClass}>{children}</p>;
    }
  };

  return renderText(texttype);
};
