import { useEffect, useState } from 'react';
import './App.css'
import CardProduct from './components/CardProduct';
import Navbar from './components/Navbar';

function App() {

  const [products, setProducts] = useState([])

  const obtenerProductos = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  };
  
  useEffect(() => {
    obtenerProductos();
  }, []);

  return (

    <div>
      
      <header>Tienda en Linea</header>
      <Navbar />

      <h1>Novedad en Productos</h1>

      <div className="ProductosInicio">

        {products.map((products) => (
          <CardProduct products = {products} />
        ))};

      </div>
      
    </div>

  );
  
}

export default App