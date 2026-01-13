import React from "react";

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div >
      <h3 style={{marginTop: "45px"}}>Product List</h3>

      {products.length === 0 && <p>No products available</p>}

      <ul style={{listStyle: "none", fontSize: "20px"}}>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}

            <button onClick={() => onEdit(p)} style={{margin: "20px"}}>Edit</button>
            <button onClick={() => onDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
