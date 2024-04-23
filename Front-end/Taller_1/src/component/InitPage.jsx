import { Link } from "react-router-dom";

export function InitPage() {


    return(
    <div>
        <h1>
            Bienvenido
        </h1>
        <Link to="/login">
        <button className="p-6">
            Iniciar Sesion
        </button>
        </Link>
        <Link to="/register">
        <button>
            Registrarse
        </button> 
        </Link>
        

    </div>
    )
    
}
