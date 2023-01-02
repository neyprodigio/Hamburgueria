import styled, { StyledComponent } from "styled-components";

export const Form = styled.form`
    display: flex;
    margin-top: 20px;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 280px;

    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.35);
    border-radius: 5px;

    .login {
        margin-top: 20px;
        text-align: left;
        font-weight: 600;
    }

    .link {
        width: 80%;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        text-align: center;
        color: #999999;
    }
    .btnRegister {
        display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    gap: 10px;
    background: #f5f5f5;
    border-radius: 8px;
    border: none;
    width: 70%;
    height: 60px;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    text-decoration: none;
    text-align: center;

    color: #999999;
    @media (min-width: 960px){
            display: flex;
        }
    }
    @media (min-width: 960px){
            margin-top: 60px;
            width: 50%;
            height: 320px;
        }
`;
