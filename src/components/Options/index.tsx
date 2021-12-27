import React from "react";

import { OptionsContainer } from "./styles";
import { OptionsType } from "./types";

import Option from "./Option";

const Options: React.FC<OptionsType> = ({ isDragging }) => {
  return (
    <OptionsContainer style={{ visibility: isDragging ? "visible" : "hidden" }}>
      <Option id="delete" />
      <Option id="update" />
    </OptionsContainer>
  );
};

export default Options;
