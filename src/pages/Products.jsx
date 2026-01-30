import axios from "axios";
import ProductList from "../components/ProductList"
import { useEffect, useState } from "react";
import { useBudget } from "../contexts/BudgetContext";


function Products() {

    //var di stato che conterrà la lista dei prodotti 
    const [products, setProducts] = useState([]);
    const endpoint = "https://fakestoreapi.com/products";

    //leggo lo stato globale dal context
    const { budgetMode } = useBudget();

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


    //quindi se budget mode === true stampo un array di oggetti filtrato in base al prezzo <=30
    //altrimenti stampo products

    const filterProducts = budgetMode ? products.filter(product => product.price <= 30)
        : products;
    return (

        <ProductList products={filterProducts} />

    )
}

export default Products