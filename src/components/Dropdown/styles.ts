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
`;

export const DropdownListContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DropdownList = styled("ul")`
  width: 40%;
  margin: 0;
  background-color: ${defaultTheme.palette.primaryLight};
  border: 1px solid ${defaultTheme.palette.primaryGrey};
  border-radius: 0.3rem;
  color: ${defaultTheme.palette.secundaryGrey};
  font-size: 1rem;
  position: absolute;
  padding: 0.5rem;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const DropdownItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  padding: 0.1rem;
`;
