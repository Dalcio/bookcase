import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 99;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  & > .pane {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  & > *:not(.pane) {
    position: relative;
    z-index: 1;
  }
`;
