import '../style/login.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Popup } from './utils/GlobalPopUpMessage';
import axios from 'axios';

export function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (showPopup) {
            timer = setTimeout(() => {
                setShowPopup(false);
            }, 3000); // 3 seconds
        }
        return () => clearTimeout(timer);
    }, [showPopup]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password
            });

            if (response.status === 200) {
                const token = response.data.token;
                console.log(token);
                localStorage.setItem('token', token);
                setUser(username, password);
                navigate("/home");
            }
        } catch (error) {
            if (error.response) {
                const { status } = error.response;
                let errorMessage = "Error desconocido";

                if (status === 400) {
                    errorMessage = "username o contraseña incorrectas";
                } else if (status === 404) {
                    errorMessage = "No se ha encontrado al usuario";
                } else if (status === 401) {
                    errorMessage = "Usuario no autorizado";
                } else if (status === 500) {
                    errorMessage = "El servidor no ha podido hacer la petición";
                }

                setPopUpMessage(errorMessage);
                setShowPopup(true);
            }
        }
    }

    return (
        <section>
            <h1>Login</h1>
            {showPopup && <Popup message={popUpMessage} />}
            <form
                className="formulario"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Iniciar sesión</button>
                <Link to="/register">
                    <button type="button" >Crear cuenta</button>
                </Link>
            </form>
        </section>
    )
}
