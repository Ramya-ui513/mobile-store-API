# Mobile Store Inventory Management System

## Overview
This is a **Full-Stack Mobile Store Inventory Management System** built using:
- **Backend:** Flask (Python) with SQLite database
- **Frontend:** React.js

This system allows users to manage inventory, including adding, viewing, updating, and deleting products.

---

## Features
### ✅ Backend (Flask & SQLite)
- **View Available Products:** Fetch all products from the database (`GET /products`)
- **Add New Products:** Insert new product records (`POST /products`)
- **Edit Existing Products:** Update product details (`PUT /products/<id>`)
- **Delete Products:** Remove a product from inventory (`DELETE /products/<id>`)
- **CORS Enabled** for frontend-backend communication

### ✅ Frontend (React.js)
- **Intro Page:** Displays an introduction to the system and allows users to navigate to the inventory management page.
- **Product Management:**
  - View all available products
  - Add new products
  - Edit existing product details
  - Delete products
- **User-friendly UI with separate styling** for each component.

---

## Installation & Setup
### 1️⃣ Backend Setup (Flask)
1. **Install dependencies:**
   ```sh
   pip install flask flask-cors sqlite3
   ```
2. **Run the Flask server:**
   ```sh
   python app.py
   ```
3. **Backend will run on:** `http://127.0.0.1:5000/`

### 2️⃣ Frontend Setup (React.js)
1. **Navigate to frontend directory:**
   ```sh
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the React app:**
   ```sh
   npm start
   ```
4. **Frontend will run on:** `http://localhost:3000/`

---

