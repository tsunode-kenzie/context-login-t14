import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"

export const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);

    console.log(user);

    if(loading) {
        return null;
    }

    return user ? <h1>Dashboard</h1> : <Navigate to='/' />  
}