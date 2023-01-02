import { useNavigate } from "react-router-dom";
import Cards from "../../components/Cards";
import Cart from "../../components/Cart";
import HeaderSearch from "../../components/HeaderSearch";

const Dashboard = () => {
    const token = localStorage.getItem("burguer-token");
    const navigate = useNavigate();
    return (
        <>
            <HeaderSearch />
            <Cards />
        </>
    );
};
export default Dashboard;
