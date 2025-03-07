import React from "react";
import axios from "axios";
import "../styles/ProductList.css";

const ProductList = ({ products, refreshProducts, setEditingProduct }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/products/${id}`);
    refreshProducts();
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Products List</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <span>{product.name} - {product.brand} - ${product.price}</span>
          <div>
            <button className="update-button" onClick={() => setEditingProduct(product)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
