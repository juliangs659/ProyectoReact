import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productos from './Pages/Productos.jsx';
import NotFound from './Pages/NotFound.jsx';
import Navbar from './components/Navbar.jsx';
import Ex from './components/Ex.jsx';
import Card from './components/Card.jsx';
import { useEffect, useState } from 'react';


export default function App() {
  const [respuesta, setRespuesta] = useState([]);

  useEffect(() => {
    async function extraerDatos() {
      const almacenar = await fetch('https://randomuser.me/api/?results=10');
      const datos = await almacenar.json();
      setRespuesta(datos.results);
    }
    extraerDatos();
  }, []);

  console.log(respuesta);


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <div className="home-container">
          {respuesta.map((item, index) => (
            <Card 
              key={index} 
              img={item.picture.large} 
              titulo={`${item.name.first} ${item.name.last}`} 
              descripcion={`Email: ${item.email}`} 
            />
          ))}
        </div>
      }/>
      <Route path="/productos" element={<Productos />} />
      <Route path="/ejemplo" element={<Ex />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
     </BrowserRouter> 
  );
}
