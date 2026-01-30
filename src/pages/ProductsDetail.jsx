import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/productCard";
import { Link } from "react-router-dom";

const endpointBase = "https://fakestoreapi.com/products/";

function ProductsDetail() {

    // eseguiamo useNavigate per aver un elemento navigate da utilizzare
    const navigate = useNavigate();



    // recuper valore param dinamico grazie a hook useParams
    const { id } = useParams();

    // var di stato per salvare info oggetto prodotto
    const [product, setProduct] = useState(null);

    // utilizzo il parametro per la chiamata corretta (sempre passando da hook su primo montaggio)
    useEffect(() => {
        axios
            .get(endpointBase + id)
            .then((resp) => {
                // controllo manuale perché l'API risponde 200 anche se l'id non esiste
                //quindi se resp.data o resp.data.id non esiste(non trova un id) quindi è true,  lancia la navigazione programmatica
                if (!resp.data || !resp.data.id) {
                    navigate("/prodotti");
                    return;
                }

                setProduct(resp.data);
            })
            .catch((err) => {
                console.log("errore sulla chiamata", err);
                navigate("/prodotti");
            });
    }, [id, navigate]);


    return (

        <>
            <h1 className="mb-4 d-flex align-items-center justify-content-center p-3">Dettaglio del Prodotto</h1>
            {product ? (
                <ProductCard product={product}>
                    <Link to="/prodotti" className="btn btn-primary">
                        Torna ai Prodotti
                    </Link>
                </ ProductCard>

            ) : (
                <p className="loader">Loading...</p>
            )

            }


        </>
    )
}

export default ProductsDetail