import React from "react";
import { HeaderPageContainer, HeaderPageTitle } from "./styles";

interface IHeaderPage {
  headerTitle?: string;
}

const HeaderPage = ({ headerTitle }: IHeaderPage): JSX.Element => {
  return (
    <HeaderPageContainer>
      <HeaderPageTitle>{headerTitle}</HeaderPageTitle>
    </HeaderPageContainer>
  );
};

export default HeaderPage;
