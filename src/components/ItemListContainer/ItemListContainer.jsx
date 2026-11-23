import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts, deleteProduct } from "../../services/productsService";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ admin = false }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

    const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de eliminar este producto?😮"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      setProducts((prev) =>
        prev.filter((product) => product.id !== id)
      );
    } catch (error) {
      setErrors("Error al eliminar el producto");
    }
  };


  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

 return (
    <section>
      {admin ? (
        <>
  <h1>Administrar productos</h1>
  <Link to="/" className="btn btn-home">
    🌷 Volver a la Tienda 🌷
  </Link>
</>
        
      ) : (
        <>
          <h1>Bienvenidos...EmMy crea para vos.</h1>

          <p>
            🪴 Creamos un mundo de colores y vida para tu jardín.
            Macetas de barro, con estilo y alma para transformar tus espacios.
            Diseños únicos, personalizados, pintados a mano.
          </p>

          <p>
            🪴 Hacé tu pedido, con 5 días de anticipación.
            También realizamos souvenirs, con 15 días de anticipación.
          </p>

          <h2>Nuestros Productos</h2>
        </>
      )}

      <ItemList
        products={products}
        admin={admin}
        onDelete={handleDelete}
      />
    </section>
  );
};