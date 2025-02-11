import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import IntroPage from "./components/IntroPage";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  const fetchProducts = async () => {
    const response = await axios.get("http://127.0.0.1:5000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app-container">
      {showIntro ? (
        <div>
          <IntroPage />
          <button className="start-button" onClick={() => setShowIntro(false)}>Get Started</button>
        </div>
      ) : (
        <>
          <h1 className="app-title">Mobile Store Manager</h1>
          <ProductForm refreshProducts={fetchProducts} />
          <ProductList products={products} refreshProducts={fetchProducts} />
        </>
      )}
    </div>
  );
};

export default App;