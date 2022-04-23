import styled from "styled-components";

export const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  text-align: center;

  .name {
    font-family: Couture Bold;
    font-size: 100px;
    letter-spacing: 0.1em;
  }

  .intro-block-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo-container {
    z-index: 0;
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 2em;

    .logo {
      position: relative;
      top: 5em;
    }
  }

  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.divColor};
  transition: all 0.5s ease;
`;
