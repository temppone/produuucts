import React, { ReactNode } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
} from "./styles";

interface IDropdown {
  children?: ReactNode;
  dropdownItems?: ReactNode[];
}

const Dropdown = ({ children, dropdownItems }: IDropdown): JSX.Element => {
  return (
    <DropdownContainer>
      <DropdownHeader>{children}</DropdownHeader>

      <DropdownList>
        {dropdownItems?.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
