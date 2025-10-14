import { Link } from "react-router-dom";

function Item({ producto }) {
    return (
        <div className="item-card">
            <img src={producto.imagen} alt={producto.nombre} className="card-img"/>
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <Link to={`/item/${producto.id}`}>Ver detalle</Link>
        </div>
    );
}

export default Item;
