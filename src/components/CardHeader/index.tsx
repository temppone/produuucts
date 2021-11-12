import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderCardContainer } from "./style";

interface Props {}

const CardHeader = (props: Props) => {
  const location = useLocation();

  const translatePath: { [key: string]: string } = {
    "/": "Home",
    "/registration": "Cadastrar produtos",
  };

  return (
    <HeaderCardContainer>
      {translatePath[location.pathname]}
    </HeaderCardContainer>
  );
};

export default CardHeader;
