import styled, { StyledComponent } from "styled-components";

export const StyledRegisterBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    gap: 10px;
    background: #f5f5f5;
    border-radius: 8px;
    border: none;
    width: 90%;
    height: 60px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    text-align: center;

    color: #999999;
    @media (min-width: 960px){
            display: flex;
        }

`;
