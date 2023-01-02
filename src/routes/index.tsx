import { Routes, Route } from "react-router-dom"
import CartPage from "../pages/cart"
import Dashboard from "../pages/dashboard"
import Login from "../pages/login"
import Register from "../pages/register"

const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="cart" element={<CartPage/>}/>
        </Routes>
    )
}
export default RoutesMain