import React, { useState } from "react";
import axios from "axios";
import "../styles/ProductForm.css";

const ProductForm = ({ refreshProducts }) => {
  const [formData, setFormData] = useState({
    name: "", brand: "", price: "", stock: "", category: "", description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:5000/products", formData);
    setFormData({ name: "", brand: "", price: "", stock: "", category: "", description: "" });
    refreshProducts();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="input" name="name" placeholder="Product Name" onChange={handleChange} required />
      <input className="input" name="brand" placeholder="Brand" onChange={handleChange} required />
      <input className="input" name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input className="input" name="stock" type="number" placeholder="Stock" onChange={handleChange} required />
      <input className="input" name="category" placeholder="Category" onChange={handleChange} required />
      <input className="input" name="description" placeholder="Description" onChange={handleChange} required />
      <button className="button">Add Product</button>
    </form>
  );
};

export default ProductForm;