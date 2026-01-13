import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();

    addProduct({
      id: Date.now(),
      name,
      price,
      category
    });

    setName("");
    setPrice(0);
    setCategory("");
  };

  return (
    <form onSubmit={submitHandler} style={{display: "flex", flexDirection:"column", gap: "25px", width: "40%", margin: "0 auto"}}>
      <h3>Add Product</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="string"
        placeholder="Category"
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
