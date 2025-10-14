import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <header className="header-principal">
            <div className="titulo-principal">
                <img src="/logoIco.png" alt="Logo de Biocon Laboratorios" className="logoIco" />
            </div>

            <nav className="navbar">
                <Link to="/">Inicio</Link>
                <Link to="/categoria/analisis">Analisis</Link>
                <Link to="/categoria/perfiles">Perfiles</Link>
                <Link to="/sucursales">Sucursales</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>

            <button id="boton-carrito" aria-label="Abrir carrito">
                <CartWidget />
                <span id="contador-carrito">0</span>
            </button>
        </header>
    )
}

export default NavBar
