import styled from "styled-components";

export const ToggleDM = styled.button`
    position: absolute;
    top: 10vh;
    cursor: pointer;
    height: 50px;
    width: 50px;   
    // border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.titleColor};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

// export const Title = styled.h1`
//     color: ${props => props.theme.titleColor};
//     transition: all .5s ease;
// `;

// export const TagLine = styled.span`
//     color: ${props => props.theme.tagLineColor};
//     font-size: 18px;
//     transition: all .5s ease;
// `;