import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products, onDelete, admin = false }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

 return (
  <div className="products-container">
    {products.map((product) => (
      <div key={product.id}>
        {admin ? (
          <>
            <Item {...product} />
            <button
              className="btn bg-delete primary"
              onClick={() => onDelete(product.id)}
            >
              🗑️ Eliminar
            </button>
          </>
        ) : (
          <Link to={`/product/${product.id}`}>
            <Item {...product} />
          </Link>
        )}
      </div>
    ))}
  </div>
);
};
