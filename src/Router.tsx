import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Login } from './pages/Login'



export function Router() {
  return (
    <Routes>
      <Route path="/" >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}