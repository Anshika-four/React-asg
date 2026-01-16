import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Sales from './pages/Sales'
import Reports from './pages/Reports'

function App() {
  /*const dispatch = useDispatch()
  const {isAuthenticated, user} = useSelector((state) => state.auth)

  useEffect(()=>{
    const storedAuth = sessionStorage.getItem('auth')
    if(storedAuth){
      const {user, token} = JSON.parse(storedAuth)
      dispatch(login({user, token}))
    }
  }, [dispatch])

  const handleLogout = () => {
    sessionStorage.clear()
    dispatch(logout())
  }
  if(!isAuthenticated){
    return <Login/>
  }
  return (
    <div>
      <h1>Sales Management System</h1>
      <h2>Welcome </h2>
      <button onClick={handleLogout}>Logout </button>
    </div>
    
  )*/

    return(
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>}/>
          <Route path='/customers' element={<ProtectedRoute><Customers/></ProtectedRoute>}/>
          <Route path='/sales' element={<ProtectedRoute><Sales/></ProtectedRoute>}/>
          <Route path='/reports' element={<ProtectedRoute><Reports/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App
