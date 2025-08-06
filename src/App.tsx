import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeletarTema from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
return (
    <>
        <BrowserRouter >
            <Navbar />
            <div className="bg-gray-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/listacategorias" element={<ListaCategorias />} />
                    <Route path="/cadastrarcategorias" element={<FormCategoria />} />
                    <Route path='/editarcategoria/:id' element={<FormCategoria />} />
                    <Route path="/deletarcategoria/:id" element={<DeletarTema />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </>
)}

export default App