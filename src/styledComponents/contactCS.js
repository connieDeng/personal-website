import styled from "styled-components";

export const StyledContact = styled.main`
  position: relative;
  top: 0em;
  left: 0em;
  height: 100vh;
  width: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;

  .mail-container {
    font-size: 1.3em;
    position: absolute;
    text-align: center;
    height: 100%;
    width: 100%;
    top: 43%;
  }
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.divColor};
  transition: all 0.5s ease;
`;

export const StyledContactLabel = styled.div`
  position: absolute;
  z-index: 0;
  font-size: 13em;
  color: ${(props) => props.theme.titleColor};
  display: static;
  font-family: Couture Bold;
  transform: rotate(-90deg) translate(-38%, 606%);
`;
