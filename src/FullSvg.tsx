import React from "react";

export const FullSvg: React.FC<{ svg: string }> = ({svg}) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }}></div>;
};
