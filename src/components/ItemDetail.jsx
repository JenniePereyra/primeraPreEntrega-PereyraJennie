function ItemDetail({ producto }) {
    return (
        <div className="item-detail">
            <h2>{producto.nombre}</h2>
            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="item-detail-img"
            />
            <p className="item-detail-categoria">Categoría: {producto.categoria}</p>
            <p className="item-detail-precio">Precio: ${producto.precio}</p>
            <p className="item-detail-descripcion">{producto.descripcion}</p>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;
