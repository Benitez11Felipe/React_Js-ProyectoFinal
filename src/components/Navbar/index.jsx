import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <span type="button">Ropa</span>
        <span type="button">Joyas</span>
        <span type="button">Electrodomesticos</span>
        <span type="button">Componentes de Computadoras</span>
        <AiOutlineShoppingCart />
    </nav>
  )

}

export default Navbar