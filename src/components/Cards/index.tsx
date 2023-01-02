import { StyledButton } from "../../styles/button";
import { StyledResultSearch } from "../../styles/resultSeatch";
import { StyledUl } from "../../styles/ul";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
const Cards = () => {
    const {toCart, filter, search, card} = useContext(CartContext)
    return (
        <>
            {filter.length !== 0 ? (
                <>
                    <StyledResultSearch>
                        <h2>Resultado para:</h2>
                        <span>{search}</span>
                    </StyledResultSearch>

                    <StyledUl>
                        {filter.map((item:any) => {
                            const { id, name, category, img, price } = item;
                            return (
                                <li key={id}>
                                    <img src={img} alt={name} />
                                    <div>
                                        <h3>{name}</h3>
                                        <span>{category}</span>
                                        <span>R$ {price}</span>
                                        <StyledButton
                                            id={id}
                                            onClick={() => toCart(id)}
                                        >
                                            Adicionar
                                        </StyledButton>
                                    </div>
                                </li>
                            );
                        })}
                    </StyledUl>
                </>
            ) : (
                <StyledUl>
                    {card.map((item:any) => {
                        const { id, name, category, img, price } = item;

                        return (
                            <li key={id}>
                                <img src={img} alt={name} />
                                <div>
                                    <h3>{name}</h3>
                                    <span>{category}</span>
                                    <span>R$ {price}</span>
                                    <StyledButton
                                        id={id}
                                        onClick={() => toCart(id)}
                                    >
                                        Adicionar
                                    </StyledButton>
                                </div>
                            </li>
                        );
                    })}
                </StyledUl>
            )}
        </>
    );
};

export default Cards;
