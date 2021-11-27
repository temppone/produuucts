import React from "react";
import { useEffect } from "react";

type HeadProps = {
  title: string;
  description: string;
};

const Head = ({ title = "", description = "" }: HeadProps): JSX.Element => {
  useEffect(() => {
    document.title = `${title} | Produuucts`;
    document
      ?.querySelector("meta[name='description']")
      ?.setAttribute("content", description || "");
  });
  return <></>;
};

export default Head;
