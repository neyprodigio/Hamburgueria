import { createContext, ReactNode } from "react";

export const UserContext = createContext({})

interface Iprovider {
    children: ReactNode
}
export const UserProvider = ({children}:Iprovider) =>{
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}