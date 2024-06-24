// importando os componentes 
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Categorias from './components/Categorias';
import Series from './components/Series';
import Filmes from './components/Filmes';
import Mylist from './components/Mylist';
import {Routes, Route } from'react-router-dom';
import './styles.global.css'
function App() {
  return (
    <>
    <header>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/Mylist" element={<Mylist />} />
      </Routes>
    </header>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
