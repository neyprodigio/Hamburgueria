import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({} as IUserContext);

interface Iprovider {
    children: ReactNode;
}
interface Ilogin {
    email: string;
    password: string;
}

export interface Iregister {
    name: string
    email: string
    password: string
}
interface IUserContext {
    userLogin: (data:Ilogin) => void
    userRegister: (data:Iregister) => void
    
}
export const UserProvider = ({ children }: Iprovider) => {
    const navigate = useNavigate();
    const userLogin = async (
        data: Ilogin) => {
        try {
            
            const response = await api.post("/login", data);
            console.log(response.data);
            localStorage.setItem("@burguer-token", response.data.accessToken);
            localStorage.setItem(
                "@burguer-user",
                JSON.stringify(response.data.user.id)
            );
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        } 
    };

    const userRegister = async (data:Iregister) => {
        try {
            const response = await api.post('/users', data)
            console.log(response.data)
            navigate('/')
        } catch (error) {
            console.log(error)
        } 
 
    }
    return <UserContext.Provider value={{userLogin, userRegister}}>{children}</UserContext.Provider>;
};
