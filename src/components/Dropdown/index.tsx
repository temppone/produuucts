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
  dropdownItems?: {
    label: string;
    onClick?: () => void;
  }[];
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
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
              <DropdownItem key={index} onClick={item.onClick}>
                {item.label}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
