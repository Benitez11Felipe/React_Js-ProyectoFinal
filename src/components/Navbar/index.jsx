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
        <span type="button">Productos</span>
      </Link>

      <Link to="ropa" style={{textDecoration: "none"}}>
        <span type="button">Ropa</span>
      </Link>

      <Link to="joyeria" style={{textDecoration: "none"}}>
        <span type="button">Joyeria</span>
      </Link>

      <Link to="electrodomesticos" style={{textDecoration: "none"}}>
        <span type="button">Electrodomesticos</span>
      </Link>
      <Link to="carrito" style={{textDecoration: "none"}}>
        <span>
          <AiOutlineShoppingCart />
        </span>
      </Link>


    </nav>
  )

}

export default Navbar