import './App.css';
import { useEffect, useState } from 'react';
import CardProduct from './components/CardProduct';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProductItem from './components/ProductItem';
import Spinner from './components/Spinner';
import { db } from "./services/config";
import { collection, getDocs } from 'firebase/firestore';

function App() {

  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection (db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs (itemsCollectionRef);
    console.log (itemsCollection)
    console.log (
      itemsCollection.docs.map ((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setItems (
      itemsCollection.docs.map ((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  useEffect(() => {
    getItems();
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    getProducts();

  }, []);

  const [productsHombre, setProductsHombre] = useState([]);

  useEffect(() => {
    const getProductsHombre = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
      const data = await res.json();
      setProductsHombre(data);
      setLoading(false);
    };

    getProductsHombre();

  }, []);

  const [productsMujer, setProductsMujer] = useState([]);

  useEffect(() => {
    const getProductsMujer = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
      const data = await res.json();
      setProductsMujer(data);
      setLoading(false);
    };

    getProductsMujer();

  }, []);

  const [productsJoyeria, setProductsJoyeria] = useState([]);

  useEffect(() => {
    const getProductsJoyeria = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
      const data = await res.json();
      setProductsJoyeria(data);
      setLoading(false);
    };

    getProductsJoyeria();

  }, []);

  const [productsElectrodomesticos, setProductsElectrodomesticos] = useState([]);

  useEffect(() => {
    const getProductsElectrodomesticos = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/electronics");
      const data = await res.json();
      setProductsElectrodomesticos(data);
      setLoading(false);
    };

    getProductsElectrodomesticos();

  }, []);

  if(loading) {
    return <Spinner />
  }

  return <div>
      
    <header>Tienda en Linea</header>
    <Navbar />
    {items.map((item) => (
      <h2 key = {item.id} >{item.title}</h2>
    ))}

    <Routes>

      <Route 
        path = "/"
        element = {
          <h1>¡Bienvenidx a tu tienda en linea!</h1>
        }
      />
      
      <Route 
        path = "/productos"
        element = {
          products.map (( products ) => (
            <CardProduct key = { products.id } products = { products } />
          ))
        }
      />

      <Route 
        path="/productos/:id"
        element = {<ProductItem products = {products}/>}
      />

      <Route
        path = "/ropa_de_hombre"
        element = {
          productsHombre.map (( products ) => (
            <CardProduct key = { products.id } products = { products } />
          ))
        }
      />

      <Route 
        path="/ropa_de_hombre/:id"
        element = {<ProductItem products = {products}/>}
      />

      <Route
        path = "/ropa_de_mujer"
        element = {
          productsMujer.map (( products ) => (
            <CardProduct key = { products.id } products = { products } />
          ))
        }
      />

      <Route 
        path="/ropa_de_mujer/:id"
        element = {<ProductItem products = {products}/>}
      />

      <Route
        path = "/joyeria"
        element = {
          productsJoyeria.map (( products ) => (
            <CardProduct key = { products.id } products = { products } />
          ))}
      />

      <Route 
        path="/joyeria/:id"
        element = {<ProductItem products = {products}/>}
      />

      <Route
        path = "/electrodomesticos"
        element = {
          productsElectrodomesticos.map (( products ) => (
            <CardProduct key = { products.id } products = { products } />
          ))}
      />

      <Route 
        path="/electrodomesticos/:id"
        element = {<ProductItem products = {products}/>}
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