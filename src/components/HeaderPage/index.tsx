import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BackSvg } from "../../assets/back.svg";
import { defaultTheme } from "../../styles/theme";
import Button from "../Button";
import {
  HeaderButtonContainer,
  HeaderPageContainer,
  HeaderPageContent,
  HeaderPageTitle,
  HeaderTitleContainer
} from "./styles";

interface IHeaderPage {
  headerTitle?: string;
}

const HeaderPage = ({ headerTitle }: IHeaderPage): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderPageContainer>
      <HeaderPageContent>
        <HeaderButtonContainer>
          {location.pathname !== "/" && (
            <Button
              onClick={() => navigate(-1)}
              svg={<BackSvg />}
              color={defaultTheme.palette.primaryLight}
            />
          )}
        </HeaderButtonContainer>

        <HeaderTitleContainer>
          <HeaderPageTitle>{headerTitle}</HeaderPageTitle>
        </HeaderTitleContainer>
      </HeaderPageContent>
    </HeaderPageContainer>
  );
};

export default HeaderPage;
