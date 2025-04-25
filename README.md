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
- **View a single Product:** Fetch a single product from the database (`GET /products/<id>`)
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
| GET    | `/products/<id>`  | View a product |
| POST   | `/products`       | Add a new product |
| PUT    | `/products/<id>`  | Update a product |
| DELETE | `/products/<id>`  | Delete a product |

---

## Notes & Future Changes
- **This README will be updated if any changes are made** to the backend API or frontend UI.
- Future improvements may include:
  - User authentication for secure access is done on 15/03/2025
  - Product search and filtering options is implemented on 22/03/2025
  
## References

- **Backend**
- https://github.com/Premkumar264/PG_Hostel/blob/main/app.py
- https://www.youtube.com/watch?v=zsYIw6RXjfM&t=169s 
- https://www.youtube.com/watch?v=0SyCQh323cg
- https://stackoverflow.com/questions/25594893/how-to-enable-cors-in-flask
- https://stackoverflow.com/questions/41940663/how-can-i-change-the-host-and-port-that-the-flask-command-uses
- https://www.w3schools.com/python/default.asp
- https://flask.palletsprojects.com/en/stable/

- **Frontend**
- https://github.com/souvik-dey-28/Login/blob/main/Login.jsx
- https://www.npmjs.com/package/axios/v/1.7.9#example
- https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project
- https://www.w3schools.com/react/react_usestate.asp
- https://www.w3schools.com/react/react_css_styling.asp
- https://react.dev/learn


---

## Contributors
- Developer:Ramya Sai Bojja
