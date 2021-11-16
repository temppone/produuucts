import React from "react";
import { LoadingContainer, LoadingContent, LoadingWrapper } from "./styles";

const Loading = (): JSX.Element => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
        <LoadingContent />
      </LoadingWrapper>
    </LoadingContainer>
  );
};

export default Loading;
