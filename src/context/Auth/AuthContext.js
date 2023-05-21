import {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage?.getItem("token"));
    const [user, setUser] = useState(localStorage?.getItem("user"));

    console.log(token);
    console.log(user);

    return (
        <AuthContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);