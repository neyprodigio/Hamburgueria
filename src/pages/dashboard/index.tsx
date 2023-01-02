import { useNavigate } from "react-router-dom"
import HeaderSearch from "../../components/HeaderSearch"

const Dashboard = () => {
   const token = localStorage.getItem("burguer-token")
   const navigate = useNavigate()
    return(
        <>
            {token ? (
                <>
                    <HeaderSearch/>
                    {/* Minha Pagina quebrou devido a falhas de tipagem no cart context */}
                    {/* Não conseguir resolver */}
                    
                </>
            ) : (
                navigate("/")
            )}
        </>
    )
}
export default Dashboard