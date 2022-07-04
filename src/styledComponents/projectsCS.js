import styled from "styled-components";

export const StyledProjects = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    background-color: ${(props) => props.theme.pageBackground};
    color: ${(props) => props.theme.divColor};
    transition: all .5s ease;
    text-align: center ;

    .projects-sub-containter{
        height: 100vh;
        width: 50%;
        float:left;
        background-color: gray;
        


        .projects-showcase-container {
        }

        .proj-button{
            
        }
    }
    
   .extra-container{
        height: 100vh;
        width: 50%;
       background-color: green;
   }
    
}
`;

export const StyledProjectLabel = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  height: 100vh;
  font-size: ${(props) => 100 / (props.text.length - 5)}vh;
  color: ${(props) => props.theme.titleColor};
  font-family: Couture Bold;
`;
