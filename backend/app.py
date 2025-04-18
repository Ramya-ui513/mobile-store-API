from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import hashlib

app = Flask(__name__)
CORS(app)

# ---------- Database Setup ----------
def get_db_connection():
    try:
        conn = sqlite3.connect("store.db")
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as e:
        print(f"Database connection error: {e}")
        return None

def init_db():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()

        # Create products table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                brand TEXT NOT NULL,
                price REAL NOT NULL,
                stock INTEGER NOT NULL,
                category TEXT NOT NULL,
                description TEXT NOT NULL
            )
        ''')

        # Create admin user manually if not exists
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
        ''')
        cursor.execute("SELECT * FROM users WHERE username=?", ("admin",))
        if not cursor.fetchone():
            admin_password = hashlib.sha256("admin123".encode()).hexdigest()
            cursor.execute("INSERT INTO users (username, password_hash) VALUES (?, ?)", ("admin", admin_password))
            conn.commit()
        conn.close()

init_db()

# ---------- Utils ----------
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# ---------- Auth ----------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username=?", ("admin",))
    user = cursor.fetchone()
    conn.close()

    if user and user['password_hash'] == hash_password(data['password']):
        return jsonify({"message": "Login successful"})
    return jsonify({"error": "Invalid credentials"}), 401

# ---------- Product Routes ----------
@app.route("/products", methods=["GET"])
def get_products():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500
    query = "SELECT * FROM products"
    cursor = conn.cursor()
    cursor.execute(query)
    products = cursor.fetchall()
    conn.close()
    return jsonify([dict(p) for p in products])

@app.route("/products/<int:product_id>", methods=["GET"])
def get_product(product_id):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE id=?", (product_id,))
    product = cursor.fetchone()
    conn.close()

    if product:
        return jsonify(dict(product))
    return jsonify({"error": "Product not found"}), 404

@app.route("/products", methods=["POST"])
def add_product():
    data = request.json
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO products (name, brand, price, stock, category, description)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (data.get('name'), data.get('brand'), data.get('price'),
          data.get('stock'), data.get('category'), data.get('description')))
    conn.commit()
    conn.close()
    return jsonify({"message": "Product added successfully"}), 201

@app.route("/products/<int:product_id>", methods=["PUT"])
def update_product(product_id):
    data = request.json
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    cursor.execute('''
        UPDATE products SET name=?, brand=?, price=?, stock=?, category=?, description=?
        WHERE id=?
    ''', (data.get('name'), data.get('brand'), data.get('price'),
          data.get('stock'), data.get('category'), data.get('description'), product_id))
    conn.commit()
    conn.close()
    return jsonify({"message": "Product updated successfully"})

@app.route("/products/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor()
    cursor.execute("DELETE FROM products WHERE id=?", (product_id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Product deleted successfully"})

# ---------- App Runner ----------
if __name__ == "__main__":
    try:
        app.run(debug=True, host="0.0.0.0", port=9533)
    except Exception as e:
        print(f"Error starting Flask application: {e}")
