import '../style/login.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {PopUp} from './utils/GlobalPopUpMessage';
//import { useHistory } from 'react-router-dom';

export function Login({setUser, User}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");


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
            const data = response.json()
            // Aqui va el handling del status del http code que envie la API...

            // Luego aqui va para que aparezca el mensaje de error
            // setPopUpMessage("Mensaje") <----- Descomentar esto para usarlo en los ifs segun el http code
            setShowPopup(true)
        }
    }

    return(
        <section>
            <h1>Login</h1>
            {showPopup && <PopUp message={popUpMessage}/>}

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
                <button type="submit" >Crear cuenta</button>
            </Link>
            
            
            </form>
            {error && <p>Los campos son obligatorios</p>}
        </section>
        
    )
}
//<button type="submit" onClick={handleRegisterClick}>Crear cuenta</button>