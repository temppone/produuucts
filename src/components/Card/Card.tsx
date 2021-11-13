import React from "react";
import CardHeader from "../CardHeader";
import { CardContainer } from "./style.";

interface Props {}

const Card = (props: Props) => {
  return (
    <CardContainer>
      <CardHeader title="teste" />
    </CardContainer>
  );
};

export default Card;
