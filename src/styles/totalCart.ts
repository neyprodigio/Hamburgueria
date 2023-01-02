import styled from "styled-components";

export const StyledTotalCart = styled.main`
    text-align: center;   
    height: 100px;
    background-color: #F5F5F5;
    padding: 10px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F5F5F5;
        padding-top:12px;
        width: 20%;
        border-top: 3px solid #E0E0E0;
        margin: 0 auto;
        
    }

    div > span:nth-child(1){
        font-weight: 600;
        color: #333333;
        font-size: 1.1rem;
        margin-bottom: 12px;
        
    }

    div > span:nth-child(2){
        color: #828282;
        font-weight: 500;
        font-size: 0.9rem;
        margin-bottom: 12px;
        
    }

   

    
`