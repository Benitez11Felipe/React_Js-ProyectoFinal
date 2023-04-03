import { useEffect, useState } from 'react';
import './App.css';
import CardProduct from './components/CardProduct';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProductItem from './components/ProductItem';
import Spinner from './components/Spinner';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false)
    };

    getProducts();

  }, []);

  if(loading) {
    return <Spinner />
  }

  return <div>
      
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
          element={ products.map (( products ) => (
            <CardProduct key={products.id} products = {products} />
          ))}
        />

        <Route 
          path="/productos/:id"
          element = {<ProductItem products = {products}/>}
        />

        <Route
          path = "/ropa_de_hombre"
          element = {
            <h1>
              Ropa de Hombre
            </h1>
          }
        />

        <Route
          path = "/ropa_de_mujer"
          element = {
            <h1>
              Ropa de Mujer
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
              Productos en el Carrito
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
}

export default App