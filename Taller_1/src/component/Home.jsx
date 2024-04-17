export function Home({setUser}) {
    const handleLogout = () => {
        setUser([])
    }
    return(
        <div>
            <h1>Bienvenido</h1>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
    )
}