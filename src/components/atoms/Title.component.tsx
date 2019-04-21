import * as React from "react";

type Props = {
  titleType?: string;
  style?: object;
};

export const TitleComponent: React.FC<Props> = (props: any) => {
  const { children, titleType, style } = props;

  const renderTitle = (titleType?: string) => {
    switch (titleType) {
      case "h4":
        return <h4 style={style}>{children}</h4>;
      case "h2":
        return <h2 style={style}>{children}</h2>;
      case "h3":
        return <h3 style={style}>{children}</h3>;
      default:
        return <h1 style={style}>{children}</h1>;
    }
  };

  return renderTitle(titleType);
};
