import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 

        img{ 
        margin: 14px 0px 15px;
        width: 150px;
        height: 22px;  
    }
        div{  
            width: 100%;
            text-align: center;   
        }

        @media (min-width: 800px){   
        flex-direction: row;
        align-items: center;   

        img{ 
            margin-left: 6%;
        }

        div{  
            display: flex;
            align-items: center;
            justify-content: end;
    }   
}
`