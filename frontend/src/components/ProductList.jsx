import React, { useState } from "react";
import axios from "axios";
import "../styles/ProductList.css";

const ProductList = ({ products, refreshProducts, setEditingProduct }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Replace localhost with your EC2 IP
  const apiBase = "http://51.21.211.128:9533";

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiBase}/products/${id}`);
      refreshProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="list-container">
      <h2 className="list-title">📦 Product Inventory</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Search by name, brand, or category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredProducts.length > 0 ? (
        <div className="product-list fade-in">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item zoom-in">
              <div className="product-details">
                <h3 className="product-name">
                  {product.name} <span className="brand">({product.brand})</span>
                </h3>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Stock:</strong> {product.stock} units</p>
                <p><strong>Description:</strong> {product.description}</p>
              </div>
              <div className="product-actions">
                <button className="update-button" onClick={() => setEditingProduct(product)}>✏️ Edit</button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No matching products found</p>
      )}
    </div>
  );
};

export default ProductList;
