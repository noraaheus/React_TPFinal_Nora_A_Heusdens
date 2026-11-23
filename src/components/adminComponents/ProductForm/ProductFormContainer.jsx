import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { uploadImage } from "../../../services/uploadImage";
import { validateProduct } from "../../../utils/validateProduct";
import { createProduct } from "../../../services/productsService";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadImage(file);

      const productData = {
        ...product,
        price: Number(product.price),
        image: imageUrl,
      };

      const id = await createProduct(productData);

      setProduct({ name: "", price: "", description: "" });
      setFile(null);

      navigate(`/admin/products/success/${id}`, { replace: true });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
      onCancel={() => navigate("/admin/dashboard")}
    />
  );
};
