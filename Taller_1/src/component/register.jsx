import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Register({ setUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || password === '') {
        setError(true);
        return;
        }

        setError(false);
        setUser([{ name, email }]); 
    };

    return (
        <section>
        <h1>Register</h1>

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
            <Link to="/login">
                <button type="submit">Registrase</button>
            </Link>
            
        </form>
        {error && <p>Todos los campos son requeridos</p>}
        </section>
    );
}