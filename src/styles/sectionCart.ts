import styled from "styled-components";

export const StyledSectionCart = styled.section`
    width: 92%;
    margin: 0 auto 20px auto;
    
        div{
            background-color: #27AE60;
            border-radius: 5px 5px 0px 0px;
        }

        div > h1 {
            font-weight: 700;
            color: #FFF;
            padding: 15px 20px;
            font-size: 0.9rem;
        }
    
        @media (min-width: 650px){ 
            width: 95%;
            
        }

        @media (min-width: 900px){
            position: fixed;
            flex-direction: column;   
            width: 35%;
            margin: 0px 25px;   
            top: 122px;
            right: 0;
            }

        @media (min-width: 960px){
            width: 39%     
        }

        @media (min-width: 1040px){
            width: 40%;
            right: 17px;    
            }


        @media (min-width: 1100px){
            right: 27px;    
        }


        @media (min-width:1200px){
            width: 368px;
            right: -12px;
        }


    
`