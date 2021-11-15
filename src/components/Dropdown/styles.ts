import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  background-color: blue;

  &:first-child {
    padding-top: 0.8em;
  }
`;

export const DropdownItem = styled.li`
  background-color: green;
`;
