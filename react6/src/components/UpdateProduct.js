import React, { useState, useEffect } from "react";

function UpdateProduct({ editProduct, updateProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setName(editProduct.name);
    setPrice(editProduct.price);
  }, [editProduct]);

  const submitHandler = (e) => {
    e.preventDefault();

    updateProduct({
      id: editProduct.id,
      name,
      price
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Update Product</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateProduct;
