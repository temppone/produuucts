import React, { useEffect, useState } from "react";
import { IInputListItem } from "../../@types";
import {
  InputContainer,
  InputField,
  InputLabel,
  InputListContainer,
  InputList,
  InputListItem,
  InputWarning,
} from "./styles";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputError: string | undefined;
  inputList?: IInputListItem[];
}

const Input = ({
  label,
  inputError,
  inputList,
  ...props
}: IInput): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IInputListItem[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchOpen(true);
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (inputList) {
      const results = inputList.filter((item: IInputListItem) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, inputList]);

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField
        inputError={inputError}
        onChange={handleChange}
        value={searchTerm}
        {...props}
      />
      <InputWarning>{inputError}</InputWarning>

      {inputList && isSearchOpen && (
        <InputListContainer>
          <InputList>
            {searchResults.map((item, index) => (
              <InputListItem onClick={() => handleChange} key={index}>
                {item.name}
              </InputListItem>
            ))}
          </InputList>
        </InputListContainer>
      )}
    </InputContainer>
  );
};

export default Input;
