import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../components/Cards";
import Cart from "../../components/Cart";
import HeaderSearch from "../../components/HeaderSearch";
import { CartContext } from "../../context/cartContext";

const Dashboard = () => {
    const { token } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>
            {token ? (
                <>
                    <HeaderSearch />
                    <Cards />
                </>
            ) : (
                navigate("/")
            )}
        </>
    );
};
export default Dashboard;
