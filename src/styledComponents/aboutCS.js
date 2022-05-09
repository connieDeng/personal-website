import styled from "styled-components";

export const StyledAbout = styled.main`
  position: relative;
  padding-top: 8vh;
  left: 0em;
  height: 100vh;
  width: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;

  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.divColor};
  transition: all 0.5s ease;

  .about-context {
    position: absolute;
    bottom: 25%;
    width: 40%;
    right: 10%;
  }
`;

export const StyledAboutLabel = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  height: 100vh;
  font-size: ${(props) =>
    100 / (props.text.length - props.text.length * 0.3)}vh;
  color: ${(props) => props.theme.titleColor};
  font-family: Couture Bold;
  transform: rotate(90deg);
  transform-origin: top left;
  left: 1em;
`;
