import React, { ReactNode, useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  DropdownListContainer,
} from "./styles";

interface IDropdown {
  children?: ReactNode;
  dropdownItems?: ReactNode[];
}

const Dropdown = ({ children, dropdownItems }: IDropdown): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggling}>{children}</DropdownHeader>
      <DropdownListContainer>
        {isOpen && (
          <DropdownList>
            {dropdownItems?.map((item, index) => (
              <DropdownItem key={index}>{item}</DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
