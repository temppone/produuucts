import React from "react";
import HeaderPage from "../../components/HeaderPage";
import { NotFoundContainer } from "./styles";

const NotFound = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <HeaderPage headerTitle="Página não encontrada" />
      Erro 404 :(
    </NotFoundContainer>
  );
};

export default NotFound;
