# Mobile Store Inventory Management System

## Overview
This is a **Full-Stack Mobile Store Inventory Management System** built using:
- **Backend:** Flask (Python) with SQLite database
- **Frontend:** React.js

This system allows users to manage inventory, including adding, viewing, updating, and deleting products.

---

## Features
### ✅ Backend (Flask & SQLite)
- **Login** Authenticate the Admin (`POST /Login`)
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
3. **Backend will run on:** `http://51.21.211.128:9533`

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
4. **Frontend will run on:** `http://51.21.211.128`

---

## Project Structure
```
/mobile-store
│── backend  # Flask API
│   ├── app.py
│   ├── store.db  # SQLite Database
│── frontend  # React App
│   ├── src
│   │   ├── components
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── IntroPage.jsx
|   |   |   |-- login.jsx
│   │   ├── styles
│   │   │   ├── ProductForm.css
│   │   │   ├── ProductList.css
│   │   │   ├── IntroPage.css
|   |   |   |-- login.css
│   ├── App.jsx
│   ├── index.js
│── package.json
│── README.md
```

---

## API Endpoints
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| POST   | `/Login`          | Authenticate Admin/User|
| GET    | `/products`       | View all products |
| POST   | `/products`       | Add a new product |
| PUT    | `/products/<id>`  | Update a product |
| DELETE | `/products/<id>`  | Delete a product |

---

## Notes & Future Changes
- **This README will be updated if any changes are made** to the backend API or frontend UI.
- Future improvements may include:
  - User authentication for secure access is done on 15/03/2024
  - Product search and filtering options is implemented on 22/03/2024 
  - Enhanced UI/UX improvements this takes time for a while for me 

---

## Contributors
- Developer:Ramya
