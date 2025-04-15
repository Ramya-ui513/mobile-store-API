import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import IntroPage from "./components/IntroPage";
import Login from "./components/login";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://51.21.211.128 :9533/products");
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
          <Route path="/" element={
            showIntro ? (
              <div>
                <IntroPage onGetStarted={() => setShowIntro(false)} />
                <button className="start-button" onClick={() => setShowIntro(false)}>Get Started</button>
              </div>
            ) : (
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
                <Login setIsAuthenticated={setIsAuthenticated} />
              )
            )
          } />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
