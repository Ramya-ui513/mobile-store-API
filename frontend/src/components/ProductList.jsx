import React from "react";
import axios from "axios";
import "../styles/ProductList.css";

const ProductList = ({ products, refreshProducts, setEditingProduct }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/products/${id}`);
      refreshProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Products List</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-details">
              <h3>{product.name} ({product.brand})</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock} units</p>
              <p><strong>Description:</strong> {product.description}</p>
            </div>
            <div className="product-actions">
              <button className="update-button" onClick={() => setEditingProduct(product)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-products">No products available</p>
      )}
    </div>
  );
};

export default ProductList;
