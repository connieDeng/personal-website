import styled from "styled-components";

export const ToggleDM = styled.button`
  position: fixed;
  z-index: 1000;
  top: 9vh;
  right: 2vw;
  cursor: pointer;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.divColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

// Entire Website
export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.divColor};
  transition: all 0.5s ease;
`;

export const StyledButton = styled.button`
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 20px;
  text-align: center;
  padding: 10px 20px 10px 20px;
  background-color: ${(props) => props.theme.pageBackground};
  border-color: ${(props) => props.theme.divColor};
  color: ${(props) => props.theme.divColor};
  border-radius: 5px;
  margin: 1em;
  &:hover {
    background-color: ${(props) => props.theme.divColor};
    color: ${(props) => props.theme.pageBackground};
  }
`;
// export const TagLine = styled.span`
//     color: ${props => props.theme.tagLineColor};
//     font-size: 18px;
//     transition: all .5s ease;
// `;
