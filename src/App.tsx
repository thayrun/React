import './App.css';
import Home from './assets/paginas/home/Home';
import Navbar from './componentes/navbar/NavBar';
import Footer from './componentes/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/paginas/login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;