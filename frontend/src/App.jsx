import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import IntroPage from "./components/IntroPage";
import Login from "./components/login";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<IntroPage onGetStarted={() => window.location.href = "/login"} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <>
                  <h1 className="app-title">Mobile Store Manager</h1>
                  <ProductForm
                    refreshProducts={fetchProducts}
                    editingProduct={editingProduct}
                    setEditingProduct={setEditingProduct}
                  />
                  <ProductList
                    products={products}
                    refreshProducts={fetchProducts}
                    setEditingProduct={setEditingProduct}
                  />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

