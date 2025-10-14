import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Analisis from "../data/Analisis.js";

function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategoria } = useParams();

    useEffect(() => {
        setLoading(true);
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                if (idCategoria) {
                    resolve(Analisis.filter((p) => p.categoria === idCategoria));
                } else {
                    resolve(Analisis);
                }
            }, 1500);
        });

        getProductos
            .then((res) => setProductos(res))
            .finally(() => setLoading(false));
    }, [idCategoria]);

    return (
        <main id="main-productos">
            <h1>Biocon Laboratorios</h1>
            <h3>{greeting}</h3>
            {loading ? <p>Cargando...</p> : <ItemList productos={productos} />}
        </main>
    );
}

export default ItemListContainer;
