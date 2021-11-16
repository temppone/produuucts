import React, { ReactNode, useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownItemLabel,
  DropdownItemSvg,
  DropdownList,
  DropdownListContainer,
} from "./styles";

interface IDropdown {
  children?: ReactNode;
  dropdownItems?: {
    svg?: ReactNode;
    label: string;
    onClick?: () => void;
    labelColor?: string;
  }[];
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
  isOpen?: boolean;
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
              <DropdownItem
                key={index}
                onClick={() => {
                  item.onClick?.();
                  toggling();
                }}
              >
                <DropdownItemSvg>{item.svg}</DropdownItemSvg>
                <DropdownItemLabel style={{ color: item.labelColor }}>
                  {item.label}
                </DropdownItemLabel>
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownListContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
