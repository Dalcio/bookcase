import styled from "styled-components";
import { bg_stripes, ground } from "../Assets";

export const Library = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100vw;
  }

  &:before {
    height: 100vh;
    background: url(${bg_stripes});
  }

  &:after {
    height: 300px;
    bottom: 0;
    background: url(${ground});
    background-position: bottom;
    background-repeat: repeat-x;
  }

  display: grid;
  justify-content: center;

  & > .logo {
    position: relative;
    width: 130px;
    margin-top: 16px;
  }
  
  @media screen and (min-width: 720px) {
    grid-template-columns: auto 400px auto;
    grid-template-rows: 0.2fr auto 2fr;
    column-gap: 1%;
    align-items: center;
    
    & > .logo {
      width: 160px;
      grid-row: 2 / 3;
      grid-column: 4 / 5;
    }
  }
`;
