import { Link } from "react-router-dom";
import {Login} from "./Login"


export function Home({setUser}) {

    

    const handleLogout = () => {
        setUser([])

    }
    return(
        <div>
            <h1>Bienvenido</h1>
            <Link to="/login">
                <button onClick={handleLogout}>Cerrar sesion</button>
            </Link>
            
        </div>
    )
}