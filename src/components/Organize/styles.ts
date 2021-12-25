import styled from "styled-components";

export const OrganizeWrapper = styled.button`
  background: none;
  border: none;
  outline: none;

  cursor: pointer;

  img {
    height: 38px;
  }

  &:active {
    img {
      opacity: 0.6;
    }
  }
`;
