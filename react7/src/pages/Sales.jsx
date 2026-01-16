import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addSale } from "../features/salesSlice";
import { reduceStock } from "../features/productSlice";
import { Link } from "react-router-dom";

function Sales(){
    const dispatch = useDispatch()
    const customers = useSelector((state)=>state.customers.customers)
    const products = useSelector((state)=> state.products.products)
    
    const [customerId, setCustomerId] = useState('')
    const [productId, setProductId] = useState('')
    const [quantity, setQuantity] = useState(1)

    const selectedProduct = products.find((p)=>p.id===productId)

    const total = selectedProduct ? selectedProduct.price * quantity: 0

    const handleSale = (e) => {
        e.preventDefault()
        if(!customerId || !selectedProduct || quantity > selectedProduct.stock){
            alert('Invalid sale data')
            return
        }

        /*const sale = {
            id: nanoid(),
            customerId,
            customerName: 
                customers.find((c)=> c.id===customerId)?.name,
            productId,
            productName: selectedProduct.name,
            quantity,
            price: selectedProduct.price,
            total,
            date: new Date().toLocaleDateString()
        }*/
        dispatch(addSale({
            customerId,
            productId,
            quantity,
            price: selectedProduct.price
        }))
        dispatch(reduceStock({ productId, quantity }))

        setCustomerId('')
        setProductId('')
        setQuantity(1)
        }

        return(
            <div>
                <h2>Sales</h2>

                <form onSubmit={handleSale} style={{display: "flex", flexDirection: "column", gap: "15px"}}>
                    <select
                        value = {customerId}
                        onChange={(e)=> setCustomerId(e.target.value)}
                        required
                    >
                        <option value="">Select Customer</option>
                        {customers.map((c)=>(
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>

                    <select 
                        value={productId}
                        onChange={(e)=>setProductId(e.target.value)}
                        required
                    >
                        <option value="">Select Product</option>
                        {products.map((p)=>(
                            <option key={p.id} value={p.id}>
                                {p.name} (Stock: {p.stock})
                            </option>
                        ))}
                    </select>
                    <input 
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e)=>setQuantity(Number(e.target.value))}
                    />

                    <p>Total : Rupees {total}</p>

                    <button type="submit">Create Sale</button>
                </form>
                <Link to='/dashboard'>Go to Dashboard</Link>
                <Link to='/reports'>View Reports</Link>
            </div>
        )
}
export default Sales