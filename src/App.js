import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Nosotros from './paginas/Nosotros'
import Productos2 from './components/Productos2'


//import {PostProvider} from './context/postContext'

function App() {
  return (
    
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos2 />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
     
      </BrowserRouter>
    
  );
}

export default App;
