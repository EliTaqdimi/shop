
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import Layout from './componenets/layout/Layout'
import { ShoppingCartContextProvider, useShoppingCartContext } from './context/ShopContext'
import Cart from './pages/cart/Cart'
import PrivetRoute from './componenets/privetRoute/PrivetRoute'
import Login from './pages/login/Login'
import ProductPageItem from './pages/productPageItem/ProductPageItem'


function App() {
  const { isLogin } = useShoppingCartContext()
  return (
    <ShoppingCartContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/store' element={<Store />} />
          <Route path="/product/:id" element={<ProductPageItem />} />
          <Route path="/login" element={isLogin ? <Navigate to="/"></Navigate> : <Login />} />
          <Route element={<PrivetRoute />}>
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </Layout>

    </ShoppingCartContextProvider>


  )
}

export default App
