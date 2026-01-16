import { useSelector } from "react-redux";
import {useState} from 'react'

function Reports(){
    const sales = useSelector((state)=>state.sales.sales);
    const customers = useSelector((state)=>state.customers.customers)
    const products = useSelector((state)=> state.products.products)
    const [selectedCustomer, setSelectedCustomer] = useState("");

    const filteredSales = selectedCustomer ? sales.filter(
        (sale) => sale.customerId === selectedCustomer
    ) : sales;

    const getCustomerName = (id) =>
    customers.find((c) => c.id === id)?.name || "Unknown";

    const getProductName = (id) =>
    products.find((p) => p.id === id)?.name || "Unknown";

    return (
        <div>
            <h2>Sales Reports</h2>
            <select
                value={selectedCustomer}
                onChange={(e)=>setSelectedCustomer(e.target.value)}
            >
                <option value="">All Customers</option>
                {customers.map((c)=> (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>

            <table border="1" cellPadding="10" style={{marginTop: "20px"}}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total (Rupees)</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSales.length===0 ? (
                        <tr>
                            <td colSpan="5">No sales found</td>
                        </tr>
                    ) : (
                        filteredSales.map((sale)=>(
                            <tr key={sale.id}>
                                <td>{new Date(sale.date).toLocaleDateString()}</td>
                                <td>{getCustomerName(sale.customerId)}</td>
                                <td>{getProductName(sale.productId)}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.total}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Reports