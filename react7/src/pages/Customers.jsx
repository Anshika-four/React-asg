import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addCustomer, deleteCustomer } from '../features/customerSlice'
import { Link } from 'react-router-dom'

function Customers (){
     const dispatch = useDispatch()
    const customers = useSelector(
        (state) => state.customers.customers
    )

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleAddCustomer = (e) => {
        e.preventDefault()

        dispatch(
        addCustomer({
            id: nanoid(),
            name,
            email,
            phone
        })
        )

        setName('')
        setEmail('')
        setPhone('')
    }

    return (
    <div>
      <h2>Customers</h2>

      <form onSubmit={handleAddCustomer} style = {{display: "flex", flexDirection: "column", gap: "15px"}}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Add Customer</button>
      </form>

      <hr />

      <ul>
        {customers.map((customer) => (
            <li key = {customer.id}>
                {customer.name} - {customer.email} - {customer.phone}
                <button onClick = {()=> dispatch(deleteCustomer(customer.id))}>
                    Delete
                </button>
            </li>
        ))}
      </ul>
      <Link to='/products'>Add Products </Link>
    </div>
    )

}
export default Customers