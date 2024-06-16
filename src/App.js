
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/apple" element={<ShopCategory category="apple" />} />
          <Route path="/samsung" element={<ShopCategory category="samsung" />} />
          <Route path="/googlepixel" element={<ShopCategory category="googlepixel" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div >
  );
}

export default App;
