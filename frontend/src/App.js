import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Inventory & Order Management</h1>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.sku} - {p.price} - Stock: {p.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
