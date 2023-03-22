import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import CardProduct from './components/CardProduct';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProductItem from './components/ProductItem';

function App() {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get ('https://fakestoreapi.com/products');
    setProducts(res.data);
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (

    <div>
      
      <header>Tienda en Linea</header>
      <Navbar />

      <Routes>

        <Route 
          path = "/"
          element = { 
            <h1>
              ¡Bienvenidx a tu <br></br> Tienda en Linea
            </h1>
          }
        />
        
        <Route 
          path = "/productos"
          element = { products.map (( products ) => (
            <CardProduct key={products.id} products = {products} />
          ))}
        />

        <Route 
          path="/productos/:id"
          element = {<ProductItem products = {products}/>}
        />

        <Route
          path = "/ropa"
          element = {
            <h1>
              Ropa
            </h1>
          }
        />

        <Route
          path = "/joyeria"
          element = {
            <h1>
              Joyeria
            </h1>
          }
        />

        <Route
          path = "/electrodomesticos"
          element = {
            <h1>
              Electrodomesticos
            </h1>
          }
        />

        <Route
          path = "/carrito"
          element = {
            <h1>
              Carrito
            </h1>
          }
        />

        <Route
          path = "*"
          element = {
            <h1>
              ERROR: 404
            </h1>
          }
        />

      </Routes>

    </div>

  );
  
}

export default App