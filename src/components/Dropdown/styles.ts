import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const DropdownContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const DropdownHeader = styled("div")`
  margin-bottom: 0.1em;
  font-weight: 500;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const DropdownListContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DropdownList = styled("ul")`
  width: 30%;
  margin: 0;
  background-color: ${defaultTheme.palette.primaryLight};
  border: 1px solid ${defaultTheme.palette.primaryGrey};
  border-radius: 0.3rem;
  color: ${defaultTheme.palette.secundaryGrey};
  font-size: 1rem;
  position: absolute;
  padding: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 15%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 13%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 12%;
  }

  &:first-child {
    padding-top: 0.8em;
  }
`;

export const DropdownItem = styled("li")`
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  margin-bottom: 0.8em;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${defaultTheme.palette.primaryGrey};
  }
`;

export const DropdownItemLabel = styled.div`
  margin-right: 0.5rem;
`;

export const DropdownItemSvg = styled.div`
  margin-right: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 70px;
  }
`;
