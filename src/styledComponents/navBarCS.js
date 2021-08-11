import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    position: fixed; 
    height: 8vh;
    z-index: 100;
    width: 100%;
    top:0;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.divColor};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;

    .hamburger-menu {
        font-size: 36px;
        width: 65px;
        align-items:center;
        cursor: pointer;
        display: none; //do not show until screen is the right size
    }

    .nav-name{
        font-family: Biko;
        font-weight: 500;
        font-size: 22px;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 30px;
    }

    .menu-content-container {
        display: flex;
        align-items: center;
    }

    ul, resume {
        font-family: Biko;
        height: 100%;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style-type: none;
        margin: 0 20px 0 50px;

        .resume{
            border: 2px solid lightgrey;
            border-radius: 2px;
            padding: 8px;

        }

        a {
            text-decoration: none;
            padding: 0 20px 0 20px;
            font-size: 20px;

            &:hover {
                color: green;
            }
        }
    }
    // media
    @media (max-width: 900px) {
        color: ${props => props.theme.divColor};
        
        .menu-content-container {
            position: absolute;
            width: 250px;
            height: 375px;
            background: ${props => props.theme.pageBackground};
            position: fixed;
            right: 0;
            top: 5vh;
            transition: 400ms ease right;
            //reverse order of display - icon on top
            flex-direction: column-reverse;
            ul {
                right: 0;
                flex-direction: column;
                justify-content: flex-start;

                li {
                    padding-left: 60px;
                    text-align: left;
                    height: 65px;
                    display: flex;
                    align-items: center;
                }
                a {
                    padding: 20px 15px;
                    width: 100%;
                }
            }

            ul, li {
                width: 100%;
            }

        }

        &.active {
            .menu-content-container {
                top: 5vh;
                right: -250px;
            }
        }
        .hamburger-menu {
            display: flex;
        }
    }
`;
