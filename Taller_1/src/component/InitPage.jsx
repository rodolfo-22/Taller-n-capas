import { Link } from "react-router-dom";

export function InitPage() {


    return(
    <div>
        <h1>
            Bienvenido
        </h1>
        <Link to="/login">
        <button>
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
