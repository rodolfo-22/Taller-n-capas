import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import {Popup} from './utils/GlobalPopUpMessage';
import axios from 'axios';

export function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const User = {
            firstname,
            lastname,
            email,
            password,
            country
        }

        const response = await axios.post('http://localhost:8080/auth/register', {
            email,
            password,
            firstname,
            lastname, 
            country
        });

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
        if(response.status === 200){
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Firstname"
            />
            <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Lastname"
            />

            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
            />
            <button type="submit">Registrarse</button>
            
        </form>
        </section>
    );
}