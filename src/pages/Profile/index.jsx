import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"

export const Profile = () => {
    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return null;
    }

    return user ? <h1>Profile</h1> : <Navigate to='/' />  
}