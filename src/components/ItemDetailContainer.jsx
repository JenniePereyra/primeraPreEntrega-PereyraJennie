import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Analisis from "../data/Analisis.js";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { idItem } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Analisis.find((p) => p.id === Number(idItem)));
            }, 1000);
        });

        getItem.then((res) => {
            setProducto(res);
            setLoading(false);
        });
    }, [idItem]);

    return (
        <main id= "main-detalle" >
        {
            loading?(
        <p> Cargando detalle...</p>
      ) : producto ? (
        <ItemDetail producto= { producto } />
      ) : (
        <p>Producto no encontrado </p>
      )
}
</main>
  );
}

export default ItemDetailContainer;
