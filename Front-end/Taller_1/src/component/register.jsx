import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import {Popup} from './utils/GlobalPopUpMessage';

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        e.preventDefault();

        const User = {
            name,
            email,
            password
        }

        const response = fetch('Aqui va la direccion de la API', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(User)
        })

        if(!response.ok){
            if(response.status === 400){
                setPopUpMessage("Datos incorrectos")
                setShowPopup(true)
            } else if (response.status === 409){
                setPopUpMessage("Conflicto con datos en el servidor")
                setShowPopup(true)
            } else if (response.status === 500){
                setPopUpMessage("El servidor no ha podido hacer la peticion")
                setShowPopup(true)
            }
        }
        if(response.status === 201){
            setPopUpMessage("Usuario registrado")
            setShowPopup(true)
            navigate("/login");
        }
         
    };

    return (
        <section>
        <h1>Register</h1>
        {showPopup && <Popup message={popUpMessage}/>}
        

        <form
            className="formulario"
            onSubmit={handleSubmit}
        >

            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            />
            <input
            type="email"
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
                <button type="submit">Registrarse</button>
            
        </form>
        </section>
    );
}