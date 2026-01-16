import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function Dashboard(){
    const customersCount = useSelector((state) => state.customers.customers.length)
    const productsCount = useSelector((state) => state.products.products.length)
    const totalSales = useSelector((state) => state.sales.sales.length)
    const totalRevenue = useSelector((state) => state.sales.totalRevenue)
    
    return (
        <div>
            <h2>Dashboard</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                <h3>Total Customers</h3>
                <p>{customersCount}</p>
                </div>

                <div>
                <h3>Total Products</h3>
                <p>{productsCount}</p>
                </div>

                <div>
                <h3>Total Sales</h3>
                <p>{totalSales}</p>
                </div>

                <div>
                <h3>Total Revenue</h3>
                <p>₹ {totalRevenue}</p>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            <Link to="/customers">Add Customers</Link>
            <Link to="/products">Add Products</Link>
            <Link to="/sales">Add Sales</Link>
            <Link to="/reports">View Reports</Link>
            </div>
        </div>        
    )

}

export default Dashboard