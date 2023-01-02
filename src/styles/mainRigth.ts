import styled, { StyledComponent } from "styled-components";

export const StyledRigth = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

      @media (min-width: 960px){
            flex-direction: row; 
            width: 70%;
            margin: auto;
        }
`