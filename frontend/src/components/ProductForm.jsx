import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProductForm.css";

const ProductForm = ({ refreshProducts, editingProduct, setEditingProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    stock: "",
    category: "",
    description: "",
  });

  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`http://13.48.58.100/:9533/products/${editingProduct.id}`, formData);
        setEditingProduct(null);
      } else {
        await axios.post("http://13.48.58.100/:9533/products", formData);
      }
      setFormData({ name: "", brand: "", price: "", stock: "", category: "", description: "" });
      refreshProducts();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div className="product-form-wrapper">
      <div className="profile-menu">
        <div className="profile-label" onClick={toggleDropdown}>
          👤 Admin ▾
        </div>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="form-title">{editingProduct ? "Update Product" : "Add New Product"}</h2>
        <div className="form-grid">
          <input
            className="input"
            name="name"
            value={formData.name}
            placeholder="Product Name"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="brand"
            value={formData.brand}
            placeholder="Brand"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="price"
            type="number"
            value={formData.price}
            placeholder="Price"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="stock"
            type="number"
            value={formData.stock}
            placeholder="Stock"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="category"
            value={formData.category}
            placeholder="Category"
            onChange={handleChange}
            required
          />
          <textarea
            className="input textarea"
            name="description"
            value={formData.description}
            placeholder="Product Description"
            onChange={handleChange}
            required
          />
        </div>
        <button className="button" type="submit">
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
