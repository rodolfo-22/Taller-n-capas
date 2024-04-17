import '../style/login.css'
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';

export function Login({setUser}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    //const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "" || password === ""){
            setError(true)
            return
        }

        setError(false)
        setUser([email])//para permitir que el usu pase a home
    }

    const handleRegisterClick = () => {
        history.push('/register');
    }

    return(
        <section>
            <h1>Login</h1>

            <form 
                className="formulario"
                onSubmit={handleSubmit}
            >

                <input
                type="text"//si queres que se valide que sea correo pon:email
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
            <button type="submit">Iniciar sesion</button>
            <button type="submit" >Crear cuenta</button>
            
            </form>
            {error && <p>Los campos son obligatorios</p>}
        </section>
        
    )
}
//<button type="submit" onClick={handleRegisterClick}>Crear cuenta</button>