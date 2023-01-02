import styled from "styled-components";

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin-left: 7px;


li{
    background-color: #F5F5F5;
    min-width: 250px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 2px solid #E0E0E0;
    border-radius: 8px;
}

li > img{
    background-color: #F5F5F5;
    width: 120px;
    height: 120px;

}

li > div{
    background-color: white;

    width: 100%;
    display: flex;
    flex-direction: column;

}

li > div > h3, span, button{
    margin: 6px 15px;   
}

li > div > h3{
    margin-top: 16px;
    font-size: 17px;
    font-weight: 700;
    color: #333333;
}

li > div > span:nth-child(3){
    font-size: 14px;
    font-weight: 600;
    color: #93D7AF;
}

li > div > span:nth-child(2){
    font-size: 12px;
    color: #828282;
}

li > div > button{
    width: 33%;

    padding: 6px;
    margin-bottom: 14px;

}

@media (min-width: 900px){

        overflow: none;
        flex-direction: column;
        margin-top: 35px;
        display: grid;
        grid-template-columns: 44% 44%;

    li{
        width: 90%;
    }

}

@media (min-width: 1000px){  
    grid-template-columns: 42% 42%;
}

@media (min-width: 1100px){
    grid-template-columns: 280px 280px;
}

@media (min-width: 1200px){

    width: 100%;
        grid-template-columns: 32% 32% 32%;
        margin-top: 32px;      
}
`