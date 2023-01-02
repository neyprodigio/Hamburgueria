import styled from "styled-components"

export const StyledForm = styled.form`
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    height: 50px;
    align-items: center;
    align-content: center;
    display: flex;
    justify-content: space-evenly;

    button{
        position: absolute; 
        right: 0;
        left: 50%;
        padding: 10px;
        font-size: 0.8rem;
        
}

@media (min-width: 800px){
    text-align: right;
    width: 40%;
    margin: 15px;;

.input-form{
    width: 100%;
    height: 43px;
}

button{
    top: 10px;
    right: 2%;
    padding: 8px;
    }
}

`