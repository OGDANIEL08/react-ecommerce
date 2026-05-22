import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/women' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kid"/>}/>
          <Route path='/owambe' element={<ShopCategory category="owambe"/>}/>
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
