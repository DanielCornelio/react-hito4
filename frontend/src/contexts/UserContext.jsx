import { createContext, useState } from "react";

export const UserContex = createContext();

const UserProvider = ({children}) => {
    const [token, setToken] = useState(true);

    const logout = ()=>{
        setToken(false)
    }

    const globalUserState = {
        token,
        logout
    }
    return <UserContex.Provider value={globalUserState}>{children}</UserContex.Provider>
}

export default UserProvider;