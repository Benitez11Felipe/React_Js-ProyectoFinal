import Span from "../Span";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <Span txtSpn={"Inicio"} />
        <Span txtSpn={"Proyectos"} />
        <Span txtSpn={"Acerca de"} />
        <AiOutlineShoppingCart />
    </nav>
  ) 

}

export default Navbar