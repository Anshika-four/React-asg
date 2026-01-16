import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../features/authSlice'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()

        const User = {email}
        const Token = 'token_123'

        sessionStorage.setItem('auth', 
            JSON.stringify({user: User, token: Token})
        )
        dispatch(login({user: User, token: Token}))
        navigate('/dashboard')
    }
  return (
    <div>
        
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{display: "flex", flexDirection: "column", gap: "25px"}}>
        <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
        />

        <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
        />

        <button type="submit" >Login</button>
      </form>
    </div>
  )
}

export default Login
