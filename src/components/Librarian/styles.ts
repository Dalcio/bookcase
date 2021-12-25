import styled from "styled-components";

export const LibrarianContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 10px;

  & > .lady {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 40vw;
    min-width: 190px;
    max-width: 250px;
  }
`;
