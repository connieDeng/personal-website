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

    .name{
        font-family: Couture Bold;
        font-size: 100px;
        letter-spacing: .08em;
    }

    .intro-block-container{
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo-container{
        position: absolute;
        overflow: hidden;
        bottom: 0;
        right: 2em;
        .logo{
            position: relative;
            top: 5em;
        }
    }
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;