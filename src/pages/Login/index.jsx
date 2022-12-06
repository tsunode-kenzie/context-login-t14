import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    return(
        <form onSubmit={handleSubmit(login)}>
            <input type="text" {...register('email')} />
            <input type="password" {...register('password')} />

            <button type="submit">Entrar</button>
        </form>
    )
}