import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('@context-demo:token');

        if(token) {
            navigate('/dashboard', { replace: true })
        }
        setLoading(false);
    }, [navigate])

    if(loading) {
        return null
    }

    return(
        <form onSubmit={handleSubmit(login)}>
            <input type="text" {...register('email')} />
            <input type="password" {...register('password')} />

            <button type="submit">Entrar</button>
        </form>
    )
}