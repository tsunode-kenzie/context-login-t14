import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem('@context-demo:token');

            if(!token) {
                setLoading(false);
                return;
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const { data } = await api.get('/profile');
                
                setUser(data);
            } catch (error) {
                console.error(error);
            }finally {
                setLoading(false);
            }
        }

        loadUser();
    }, [])

    async function login(data) {
        try {       
            const response = await api.post('/sessions', data);
    
            const { token, user: userResponse } = response.data;
    
            setUser(userResponse);
            localStorage.setItem('@context-demo:token', token);
            api.defaults.headers.common.authorization = `Bearer ${token}`;
    
            const toNavigate = location.state?.from?.pathname || '/dashboard'

            navigate(toNavigate, { replace: true })
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <AuthContext.Provider value={{ login, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

