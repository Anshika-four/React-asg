import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductList from "./ProductList";
//import Message from "./components/Message";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  //const [message, setMessage] = useState("");

  // Load from LocalStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products"));
    if (data) setProducts(data);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ADD
  const addProduct = (product) => {
    setProducts([...products, product]);
    //setMessage("Product Added Successfully");
  };

  // UPDATE
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      )
    );
    setEditProduct(null);
    //setMessage("Product Updated Successfully");
  };

  // DELETE
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    //setMessage("Product Deleted Successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Management App</h2>


      <AddProduct addProduct={addProduct} />

      {editProduct && (
        <UpdateProduct
          editProduct={editProduct}
          updateProduct={updateProduct}
        />
      )}

      <ProductList
        products={products}
        onEdit={setEditProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default ProductManagement;
