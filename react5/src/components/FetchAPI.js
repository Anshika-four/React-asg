import React, {useEffect, useState} from 'react'

function FetchAPI() {
  const [users, setUsers] = useState([]);
  const [loading ,setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then((res)=>{
        setUsers(res);
        setLoading(false);
    }

    )
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    })
  }, [])

  if(loading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2 style={{color: "red"}}>Error: {error} </h2>
  }

  return (
    <div>
      <h2>Users List</h2>
      <ul style={{listStyle: 'none', textAlign: "left"}}>
        {users.map((user)=>(
            <li key={user.id}>{user.name} - {user.email}</li>))}
      </ul>
    </div>
  )
}

export default FetchAPI
