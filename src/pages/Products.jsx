import axios from "axios";
import ProductList from "../components/ProductList"
import { useEffect, useState } from "react";

function Products() {

    //var di stato che conterrà la lista dei prodotti 
    const [products, setProducts] = useState([]);
    const endpoint = "https://fakestoreapi.com/products";

    //montaggio del componente al cambio di Route 
    useEffect(() => {

        axios.get(endpoint)
            .then((res) => {
                setProducts(res.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }, []); //viene eseguito una sola volta quando entro nella pagina 

    return (
       
            <ProductList products={products} />
        
    )
}

export default Products