// teste para subir pro git
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaTipos from './components/tipo/listatipos/ListaTipos'
import DeletarTipo from './components/tipo/deletartipo/DeletarTipo'
import FormTipo from './components/tipo/formtipo/FormTipo'
import Perfil from './pages/perfil/Perfil'
import Login from './pages/login/Login'
import ListaPizzas from './components/pizzas/listapizzas/ListaPizzas'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import FormPizza from './components/pizzas/formpizzas/FormPizzas'
import DeletarPizzas from './components/pizzas/deletarpizzas/DeletarPizzas'
import ListaPizzasPorTipo from "./pages/pizzas/ListaPizzasPorTipo";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Sobre from './pages/sobre/Sobre'


function App() {
  return (
    <>
        <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
            <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tipos" element={<ListaTipos />} />
              <Route path="/cadastrartipos" element={<FormTipo />} />
              <Route path="/editartipo/:id" element={<FormTipo />} />
              <Route path="/deletartipo/:id" element={<DeletarTipo />} />
              <Route path="/cardapio" element={<ListaPizzas />} />
              <Route path="/cadastrarpizza" element={<FormPizza />} />
              <Route path="/cadastrarpizza/:id" element={<FormPizza />} />
              <Route path="/editarpizza/:id" element={<FormPizza />} />
              <Route path="/deletarpizza/:id" element={<DeletarPizzas />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/pizzas/tipo/:id" element={<ListaPizzasPorTipo />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}

export default App
