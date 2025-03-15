import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProductForm.css";

const ProductForm = ({ refreshProducts, editingProduct, setEditingProduct }) => {
  const [formData, setFormData] = useState({
    name: "", brand: "", price: "", stock: "", category: "", description: ""
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`http://127.0.0.1:5000/products/${editingProduct.id}`, formData);
        setEditingProduct(null);
      } else {
        await axios.post("http://127.0.0.1:5000/products", formData);
      }
      setFormData({ name: "", brand: "", price: "", stock: "", category: "", description: "" });
      refreshProducts();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">{editingProduct ? "Update Product" : "Add Product"}</h2>
      <input className="input" name="name" value={formData.name} placeholder="Product Name" onChange={handleChange} required />
      <input className="input" name="brand" value={formData.brand} placeholder="Brand" onChange={handleChange} required />
      <input className="input" name="price" type="number" value={formData.price} placeholder="Price" onChange={handleChange} required />
      <input className="input" name="stock" type="number" value={formData.stock} placeholder="Stock" onChange={handleChange} required />
      <input className="input" name="category" value={formData.category} placeholder="Category" onChange={handleChange} required />
      <input className="input" name="description" value={formData.description} placeholder="Description" onChange={handleChange} required />
      <button className="button">{editingProduct ? "Update Product" : "Add Product"}</button>
    </form>
  );
};

export default ProductForm;
