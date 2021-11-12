import React from "react";
import { PageHeaderContainer, PageHeaderTitle } from "./styles";

interface IPageHeader {
  headerTitle?: string;
}

const PageHeader = ({ headerTitle }: IPageHeader) => {

  return (
    <PageHeaderContainer>
      <PageHeaderTitle>{headerTitle}</PageHeaderTitle>
    </PageHeaderContainer>
  );
};

export default PageHeader;
