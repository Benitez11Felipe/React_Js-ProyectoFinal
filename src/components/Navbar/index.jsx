import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>

      <Link to="/" style={{textDecoration: "none"}}>
        <span type="button">Home</span>
      </Link>
      
      <Link to="/productos" style={{textDecoration: "none"}}>
        <span id="ProductosBtn" type="button">Productos</span>
      </Link>

      <Link to="/ropa_de_hombre" style={{textDecoration: "none"}}>
        <span id="RopaHombreBtn" type="button">Ropa de Hombre</span>
      </Link>

      <Link to="/ropa_de_mujer" style={{textDecoration: "none"}}>
        <span id="RopaMujerBtn" type="button">Ropa de Mujer</span>
      </Link>

      <Link to="/joyeria" style={{textDecoration: "none"}}>
        <span id="JoyeriaBtn" type="button">Joyeria</span>
      </Link>

      <Link to="/electrodomesticos" style={{textDecoration: "none"}}>
        <span id="ElectrodoesticosBtn" type="button">Electrodomesticos</span>
      </Link>
      <Link to="/carrito" style={{textDecoration: "none"}}>
        <span id="CarritoBtn">
          <AiOutlineShoppingCart />
        </span>
      </Link>


    </nav>
  )

}

export default Navbar