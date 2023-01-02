import { StyledButton } from "../../styles/button";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { StyledForm } from "../../styles/formCart";
import { StyledInput } from "../../styles/input1";
import {BsCart4} from "react-icons/bs"
import {RxExit} from "react-icons/rx"
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
    const { product, setSearch } = useContext(CartContext);
    const navigate = useNavigate()
    const Exit = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <>
            <StyledForm onSubmit={product}>
                <StyledInput
                    type="text"
                    onChange={(e: any) => setSearch(e.target.value)}
                    placeholder="Digitar Pesquisa"
                />
                <StyledButton type="submit">Ir</StyledButton>
                <span onClick={() => navigate("/cart")}><BsCart4/></span>
                <span onClick={() => Exit()}><RxExit/></span>
            </StyledForm>
        </>
    );
};

export default HeaderSearch;
