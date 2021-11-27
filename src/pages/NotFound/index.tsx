import React from "react";
import Head from "../../components/Head";
import HeaderPage from "../../components/HeaderPage";
import { NotFoundContainer } from "./styles";

const NotFound = (): JSX.Element => {
  return (
    <NotFoundContainer>
      <Head title="Não encontrada" description="Essa página não existe" />
      <HeaderPage headerTitle="Página não encontrada" />
      Erro 404 :(
    </NotFoundContainer>
  );
};

export default NotFound;
