import React from 'react'

function UserCard(props){
    const {name, email, role} = props
    return (
        <h1>{name} - {email} - {role}</h1>
    )
}
export default UserCard