import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Nosotros from './paginas/Nosotros'
import Productos2 from './components/Productos2'
import Productos3 from './components/Productos3'
import Pantalones from './components/Pantalones/Pantalones'
import Chaquetas from './components/Chaquetas/Chaquetas'
import Accesorios from './components/Accesorios/Accesorios'
import Gorros from './components/Gorros/Gorros'
import Camisas from './components/Camisas/Camisas'
import ProductCard from './components/Pantalones/ProductCard'

//import ProductDetail from './components/Pantalones/ProductDetail'
import PruebaDetalle from './components/Pantalones/PruebaDetalle.jsx'
import CartPage from './components/Carrito/Carrito'
import Payment from './components/Carrito/Payment'
import Checkout from './components/Carrito/CheckoutButton'
import Navbar from './components/NavBar'
//import {PostProvider} from './context/postContext'
import Paypal from './components/Carrito/Paypal'
import UserRegis from './components/Usuarios/UserRegis'
import Buscador  from './components/Buscador'

function App() {
  return (
    
    <Router>
    
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/productos" element={<Productos2 />} />
          <Route path="/sugerencias" element={<Productos3 />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/pantalones" element={<Pantalones />} />
          <Route path="/chaquetas" element={<Chaquetas />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/gorros" element={<Gorros />} />
          <Route path="/camisas" element={<Camisas />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          
          <Route path="/:categorias" element={<ProductCard />} />


          <Route path="/user" element={<UserRegis />} />
          <Route path="/create-orders" element={<Paypal />} />

          <Route path="/productos/:id" element={<PruebaDetalle />} />
          
        </Routes>
     
      </Router>
    
  );
}

export default App;
