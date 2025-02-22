import React from "react";
import "../styles/IntroPage.css";

const IntroPage = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Welcome to the Mobile Store</h1>
      <p className="intro-text">
        This is a simple inventory management system where you can:
      </p>
      <ul className="intro-list">
        <li>🛒 View available products</li>
        <li>➕ Add new products</li>
        <li>✏️ Edit existing products</li>
        <li>🗑️ Delete products</li>
      </ul>
      <p className="intro-text">
        Manage your inventory easily and efficiently with our user-friendly interface.
      </p>
    </div>
  );
};

export default IntroPage;
