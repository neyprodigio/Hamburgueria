import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledInput } from "../../styles/input";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
const HeaderSearch = () => {
    const {product, setSearch} = useContext(CartContext)
    return (
        <>
            <StyledForm onSubmit={product}>
                <StyledInput
                    type="text"
                    onChange={(e:any) => setSearch(e.target.value)}
                    placeholder="Digitar Pesquisa"
                />
                <StyledButton type="submit">Pesquisar</StyledButton>
            </StyledForm>
        </>
    );
};

export default HeaderSearch;
