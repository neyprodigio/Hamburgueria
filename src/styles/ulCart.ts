import styled from "styled-components";

export const StyledUlCart = styled.ul`
    max-height: 300px;
    overflow-y: scroll;
    background-color: #F5F5F5;

        .ulCart-msg{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 40px;
            background-color: #F5F5F5;
    }

        .ulCart-msg > p{
            margin-top: 5px;
            font-weight: 600;
            color: #333333;
            font-size: 1.5rem;
        }

        .ulCart-msg > span{
            font-weight: 500;
            color: #828282;
            font-size: 1rem;
        }
`