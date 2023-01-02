import { StyledSectionCart } from "../../styles/sectionCart";
import { StyledUlCart } from "../../styles/ulCart";
//import Lottie from "react-lottie";
//import Gif from "../../assets/animation.json";
//import animationData from "../../assets/animation.json";
import { StyledCardCart } from "../../styles/cardCart";
import { StyledTotalCart } from "../../styles/totalCart";
import { StyledRemoveAllButton } from "../../styles/buttonRemoveAll";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const Cart = () => {
    /* const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    }; */
    const {addUnit, removeTheUnits,delAll, delProdut, cart, total} = useContext(CartContext)

    

    return (
        <>
            <StyledSectionCart>
                <div>
                    <h1>Carrinho de compras</h1>
                </div>
                <StyledUlCart>
                    {cart.length === 0 ? (
                        <div className="ulCart-msg">
                            {/* <Lottie
                                animationData={Gif}
                                options={defaultOptions}
                                height={150}
                            /> */}
                            <p>Sua sacola está vazia</p>
                        </div>
                    ) : (
                        cart.map((item:any) => {
                            return (
                                <StyledCardCart>
                                    <img src={item.img} alt={item.name} />
                                    <section className="section-content">
                                        <div className="section-content-ctg">
                                            <h3>{item.name}</h3>
                                            <span>{item.category}</span>
                                        </div>
                                        <div className="section-content-btn">
                                            <button
                                                onClick={() =>
                                                    delProdut(item.id)
                                                }
                                            >
                                                Remover
                                            </button>
                                            <div className="btn-amount">
                                                <button
                                                    className="btnPrimaryMedium"
                                                    type="button"
                                                    onClick={() =>
                                                        removeTheUnits(item.id)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span>{item.amount}</span>
                                                <button
                                                    className="btnPrimaryMedium"
                                                    type="button"
                                                    onClick={() =>
                                                        addUnit(item.id)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </StyledCardCart>
                            );
                        })
                    )}
                </StyledUlCart>
                <StyledTotalCart>
                    <div>
                        <span>Total:</span>
                        <span>R$ {total.toFixed(2)}</span>
                    </div>
                    <StyledRemoveAllButton onClick={() => delAll()}>
                        Remover Todos
                    </StyledRemoveAllButton>
                </StyledTotalCart>
            </StyledSectionCart>
        </>
    );
};

export default Cart;
