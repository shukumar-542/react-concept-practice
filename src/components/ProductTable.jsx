import React, { useMemo, useState } from "react";

const ProductTable = () => {
  const [query, setQuery] = useState("");
  const products = [
    { name: "iPhone", price: 1200 },
    { name: "Samsung", price: 800 },
    { name: "OnePlus", price: 700 },
    { name: "Nokia", price: 400 },
  ];


  const filteredProducts = useMemo(()=>{
    return products.filter(product=>product.name.toLowerCase()?.includes(query.toLowerCase()))
  }, [query]) 

  return (
    <div>
      <h2>📦 Product List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <table border={"1"} cellPadding={"10"} style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
