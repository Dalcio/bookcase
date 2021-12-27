import styled from "styled-components";

export const OptionsContainer = styled.div`
  grid-column: 2 / 3;
  position: absolute;
  justify-content: center;
  display: flex;
  max-height: 44px;
`;

export const OptionWrapper = styled.div`
  padding: 10px;

  align-items: center;

  border-radius: 10px;

  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  transition: transform 0.2s ease-in-out;

  &#delete {
    color: #eb3929;
    background: #ffffff;
  }

  &#update {
    color: #fff;
    background: #1bc133;
    margin-left: 16px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
