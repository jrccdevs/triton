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
import CartPage from './components/Carrito/CartPage'

import Navbar from './components/NavBar'
//import {PostProvider} from './context/postContext'

function App() {
  return (
    
    <Router>
    
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos2 />} />
          <Route path="/sugerencias" element={<Productos3 />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/pantalones" element={<Pantalones />} />
          <Route path="/chaquetas" element={<Chaquetas />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/gorros" element={<Gorros />} />
          <Route path="/camisas" element={<Camisas />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productos/:id" element={<PruebaDetalle />} /> {/* Página de detalles */}
          
          <Route path="/:categorias" element={<ProductCard />} />
        </Routes>
     
      </Router>
    
  );
}

export default App;
