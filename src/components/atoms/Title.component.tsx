import * as React from "react";

type Props = {
  titleType?: string;
};

export const TitleComponent: React.FC<Props> = (props: any) => {
  const { children, titleType } = props;

  const renderTitle = (titleType?: string) => {
    switch (titleType) {
      case "h4":
        return <h4>{children}</h4>;
      case "h2":
        return <h2>{children}</h2>;
      case "h3":
        return <h3>{children}</h3>;
      default:
        return <h1>{children}</h1>;
    }
  };

  return renderTitle(titleType);
};
