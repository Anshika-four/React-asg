import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'
import {addProduct, deleteProduct} from '../features/productSlice'
import { Link } from 'react-router-dom'

function Products(){
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products.products)

    const [name, setName]= useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')

    const handleAddProduct = (e) => {
        e.preventDefault()

        dispatch(
            addProduct({
                id: nanoid(),
                name,
                price: Number(price),
                stock: Number(stock)
            })
        )
        setName('')
        setPrice('')
        setStock('')
    }
    return (
        <div>
            <h2>Products</h2>
      
            <form onSubmit={handleAddProduct} style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                <input
                placeholder="Product name"
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
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                />

                <button type="submit">Add Product</button>
            </form>

            <hr />

            <ul>
                {products.map((product) => (
                <li key={product.id}>
                    {product.name} – ₹{product.price} – Stock: {product.stock}
                    <button
                    onClick={() => dispatch(deleteProduct(product.id))}
                    >
                    Delete
                    </button>
                </li>
                ))}
            </ul>
            <Link to ='/sales' >Add sales</Link>
        </div>
    )
}
export default Products