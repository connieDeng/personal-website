import styled from "styled-components";

export const StyledProjects = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.divColor};
    transition: all .5s ease;
    
    // Category Container
    .category-container{
        position: absolute;
        z-index: 1;
        left: 10em;
        top: 15vh;

        .projects-title{
            font-size: 3em;
            font-family: Couture Bold;
            letter-spacing: .08em;
        }

        .rectangle {
            position: absolute;
            z-index: -1;
            top: 2.3em;
            width: 300px;
            height: 20px;
            background-color: rgb(255, 99, 71, 0.8);
        }
    }

    // Project Showcase
    .projects-showcase-container {
        display: inline-grid;
        flex: 1;
        margin-top: 37vh;
        width: 100%;
        height: 60vh;
        // background-color: yellow;
        grid-template-columns: 2fr 1fr 2fr;

        .proj-card {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 1em;
            background-color: #F2F2F2;
            color: black;
            width: 25em;
            height: 60%;
            padding: 3em;
        }
        
    }

    .category-title{
        position: absolute;
        top: 0;
        left: -.1em;
        z-index: -100;
        font-size: 16em;
        color: black,
        display: static;
        font-family: Couture Bold;
    }

    .proj-button{
        position: absolute;
        bottom: 4em;
        right: 3em;
    }
        
}
`;
