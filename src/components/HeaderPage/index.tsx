import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button";
import { HeaderPageContainer, HeaderPageTitle } from "./styles";
import { ReactComponent as BackSvg } from "../../assets/back.svg";
import { defaultTheme } from "../../styles/theme";

interface IHeaderPage {
  headerTitle?: string;
}

const HeaderPage = ({ headerTitle }: IHeaderPage): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderPageContainer>
      {location.pathname !== "/" && (
        <Button
          onClick={() => navigate(-1)}
          svg={<BackSvg />}
          color={defaultTheme.palette.primaryLight}
        />
      )}
      <HeaderPageTitle>{headerTitle}</HeaderPageTitle>
    </HeaderPageContainer>
  );
};

export default HeaderPage;
