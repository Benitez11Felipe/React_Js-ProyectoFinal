import { useEffect, useState } from 'react';
import './App.css'
import CardProduct from './components/CardProduct';
import Navbar from './components/Navbar';

function App() {

  const [products, setProducts] = useState([])
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }, [])

  return (

    <div>
      

      <header>Tienda</header>
      <Navbar />

      <h1>Novedad en Productos</h1>

      {products.map((products) => (
        <CardProduct products ={products} />
      ))}

    </div>

  );
  
}

export default App