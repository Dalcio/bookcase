import React, { HTMLAttributes } from "react";

import { button } from "../../Assets";
import { OrganizeWrapper } from "./styles";

const Organizer: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <OrganizeWrapper {...props}>
      <img src={button} alt="organize btn" />
    </OrganizeWrapper>
  );
};

export default Organizer;
