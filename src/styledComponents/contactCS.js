import styled from "styled-components";

export const StyledContact = styled.main`
    position: relative;
    top: 0em;
    left:0em;
    height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    
    .category-container{
        position: absolute;
        z-index: 1;
        left: 10em;
        top:10em;

        .contact-title{
            font-size: 3em;
            font-family: Couture Bold;
            letter-spacing: .08em;
        }

        .rectangle{
            position: absolute;
            z-index: -1;
            top: 2.3em;
            width: 300px;
            height: 20px;
            background-color: rgba(60, 179, 113, 0.8);
        }
    }

    .mail-container{
        font-size: 1.3em;
        position: absolute;
        text-align: center;
        height: 100%;
        width: 100%;
        top: 43%;
    }
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.divColor};
    transition: all .5s ease;
`;

export const StyledContactLabel = styled.div`
    position: absolute;
    z-index: 0;
    font-size: 13em;
    color:  ${props => props.theme.titleColor};
    display: static;
    font-family: Couture Bold;
    transform: rotate(-90deg) translate(-38%, 606%);
`;