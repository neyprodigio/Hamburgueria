import styled from "styled-components";

export const StyledCardCart = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    width: 90%;
    height: 100px;
    margin: 6px auto;


     img{
        width: 70px;
        height: 70px;

        background-color: #dbdbdb;
        border-radius: 2px;

    }

    .section-content{
        display: flex;
        width: 100%;
        justify-content: space-between;
        
    }

    .section-content-ctg{
        background-color: #F5F5F5;
        padding: 10px 0px 0px 10px;
    }

    .section-content-ctg > h3{

        font-size: 0.9rem;
        font-weight: 700;
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .section-content-ctg > span{
        margin: 0;
        margin-top: 13px;

        display: block;
        
        font-weight: 500;
        font-size: 0.9rem;
        color: #828282;
    }

    .section-content-btn{
        background-color: #F5F5F5;
    text-align: right;
    width: 100%;
    }

    .section-content-btn > button{
        margin: 0;
        margin-top: 11px;
        border: none;
        text-align: right;
        font-weight: 500;
        font-size: 0.8rem;

        background-color: transparent;
        color: #a4a4a4;


    }

    .btn-amount{
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: transparent;
    }

    .btn-amount > button{
        margin: 0;
        padding: 0px;
        width: 27px;
        height: 27px;
    }

    .btn-amount > span{
        margin: 0;
        text-align: center;
        margin: 0 10px;

    }
`