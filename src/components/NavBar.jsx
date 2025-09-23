import CartWidget from './CartWidget'

function NavBar() {
    return (
        <header className="header-principal">

            <div className="titulo-principal">
                <img src="/logoIco.png" alt="Logo de Biocon Laboratorios" className="logoIco" />
            </div>

            <nav>
                <ul>
                    <li><a href="/">Perfiles</a></li>
                    <li><a href="/">Sucursales</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </nav>

            <button id="boton-carrito" aria-label="Abrir carrito">
                <CartWidget />
                <span id="contador-carrito">0</span>
            </button>
        </header>
    )
}

export default NavBar


