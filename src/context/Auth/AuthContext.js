import {createContext, useContext, useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage?.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
    // const [token, setToken] = useState()
    // const [user, setUser] = useState()

    console.log(token);
    console.log(user);

    return (
        <AuthContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);