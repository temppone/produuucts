import React from "react";
import { defaultTheme } from "../../styles/theme";
import Button from "../Button";
import { ReactComponent as CloseSvg } from "../../assets/close.svg";

import {
  CloseButton,
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from "./styles";

interface IModal {
  header: string;
  body: string;
  buttonName: string;
  onClose?: () => void;
  onClick?: () => void;
}

const Modal = ({
  header,
  body,
  buttonName,
  onClose,
  onClick,
}: IModal): JSX.Element => {
  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton>
          <Button svg={<CloseSvg />} onClick={onClose} />
        </CloseButton>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <Button
          background={defaultTheme.palette.warning}
          borderRadius="0.5rem"
          color={defaultTheme.palette.primaryLight}
          width="100%"
          name={buttonName}
          onClick={onClick}
        />
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
