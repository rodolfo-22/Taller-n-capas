import '../style/login.css'
import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from "react-router-dom";
import {Popup} from './utils/GlobalPopUpMessage';
//import { useHistory } from 'react-router-dom';

export function Login({setUser, User}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");
    const navigate = useNavigate();


  // Handling del popup para el mensaje de error
    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000); // 3 seconds
    } return () => clearTimeout(timer);
    }, [showPopup]);

    const handleSubmit = (e) => {
        e.preventDefault()

        setUser(email, password);
        const response = fetch('Aqui va la direccion de la API', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(User)
        })

        if(!response.ok){
            if(response.status === 400){
                setPopUpMessage("Email o contraseña incorrectas")
                setShowPopup(true)
            } else if (response.status === 404){
                setPopUpMessage("No se ha encontrado al usuario")
                setShowPopup(true)
            } else if (response.status === 401){
                setPopUpMessage("Usuario no autorizado")
                setShowPopup(true)
            } else if (response.status === 500){
                setPopUpMessage("El servidor no ha podido hacer la peticion")
                setShowPopup(true)
            }
        } else if (response.status === 200){
            navigate("/home");
        }
        

        
    }

    return(
        <section>
            <h1>Login</h1>
            {showPopup && <Popup message={popUpMessage}/>}
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

            <Link to="/home">
                
            </Link>
            <button type="submit">Iniciar sesion</button>
            <Link to="/register">
                <button type="button" >Crear cuenta</button>
            </Link>
            
            
            </form>
            
        </section>
        
    )
}
//<button type="submit" onClick={handleRegisterClick}>Crear cuenta</button>