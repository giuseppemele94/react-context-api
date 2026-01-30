import { Link } from "react-router-dom";
import ProductCard from "./productCard";

function ProductList({ products }) {
  return (
    <div className="container-md py-5">
      <h1 className="mb-4 d-flex align-items-center justify-content-center p-3">
        Prodotti
      </h1>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12  ">
            <ProductCard product={product}>
              <Link to={`/prodotti/${product.id}`} className="btn btn-primary">
                Vai al dettaglio
              </Link>
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
