import styled from "styled-components";

export const StyledAbout = styled.main`
    position: relative;
    padding-top: 8vh;
    left:0em;
    height: 100vh;
    width: 100%;
    // background-color: green;
    overflow-x: hidden !important;
    overflow-y: hidden !important;

    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.divColor};
    transition: all .5s ease;

    .category-container{
        position: absolute;
        z-index: 1;
        left: 10em;
        top:10em;

        .about-title{
            font-size: 3em;
            font-family: Couture Bold;
            letter-spacing: .08em;
        }

        .rectangle{
            position: absolute;
            z-index: -1;
            top: 2.3em;
            width: 200px;
            height: 20px;
            background-color: rgba(255, 45, 85);
        }
    }

    .about-context{
        position: absolute;
        bottom: 25%;
        width: 40%;
        right: 10%;
    }

`;

export const StyledAboutLabel = styled.div`
    position: absolute;
    top: 0
    z-index: 0;
    font-size: 18em;
    color: ${props => props.theme.titleColor};
    font-family: Couture Bold;
    transform: rotate(90deg) translate(26%, 121%);
`;