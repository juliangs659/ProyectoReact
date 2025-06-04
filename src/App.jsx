import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Productos from './Pages/Productos.jsx';
import NotFound from './Pages/NotFound.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
     </BrowserRouter> 
  );
}
